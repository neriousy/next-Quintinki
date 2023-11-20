import NextAuth from 'next-auth';
import type { NextAuthConfig } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import { getDiscordUserInfo } from './app/api/auth/[...nextauth]/utils';
import { addUser, getUser } from './app/db/user/actions';

const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      checks: ['state', 'pkce'],
      authorization:
        'https://discord.com/api/oauth2/authorize?scope=identify%20guilds.members.read',
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.user.id = token.id;
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      if (token.role) {
        session.role = token.role;
      }
      if (token.nick) {
        session.nick = token.nick;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;

        const { role, nick } = await getDiscordUserInfo(
          account.access_token as string
        );
        token.role = role;
        token.nick = nick;
      }
      return token;
    },

    async signIn({ account, profile }) {
      if (account?.providerAccountId === undefined) return false;
      const user = await getUser(account.providerAccountId as string);

      if (!user) {
        const { role, nick } = await getDiscordUserInfo(
          account?.access_token as string
        );
        await addUser({
          discord_id: account?.providerAccountId as string,
          discord_nick: profile?.username as string,
          discord_quintin_nick: nick,
          avatar: profile?.avatar as string,
          role: role,
        });
      }

      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, update, signIn, signOut } = NextAuth({
  ...authOptions,
});
