import NextAuth from 'next-auth';
import { ProviderType } from 'next-auth/providers';

declare module 'next-auth' {
  /**
   * Represents the shape of the user object in the NextAuth session.
   */
  interface User {
    // Define properties that are in your user object
    name?: string;
    email?: string;
    image?: string;
  }

  /**
   * Represents a session object in NextAuth.
   */
  interface Session {
    user?: User;
    nick?: string;
  }

  interface account {
    token_type: string;
    access_token: string;
    refresh_token: string;
    scope: string;
    expires_in: number;
    expires_at: number;
    provider: string;
    type: ProviderType;
    providerAccountId: string;
  }
}
