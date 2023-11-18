import NextAuth from 'next-auth';

import type { NextAuthConfig } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import { getDiscordUserInfo } from './api/auth/[...nextauth]/utils';

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
      checks: ['state', 'pkce'],
      authorization: {
        params: { scope: 'identify guilds.members.read' },
      },
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
  },
} satisfies NextAuthConfig;
