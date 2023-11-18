import { authOptions } from '@/app/nextAuth';
import NextAuth from 'next-auth';

export const middleware = NextAuth(authOptions).auth;

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
