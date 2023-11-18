import NextAuth from 'next-auth';

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
}
