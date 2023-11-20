'use server';

import { signIn, signOut } from '@/auth';

export async function logout() {
  try {
    await signOut();
  } catch (error) {
    if ((error as Error).message.includes('signOut')) {
      return 'signOut';
    }
    throw error;
  }
}

export async function login() {
  try {
    await signIn('discord');
  } catch (error) {
    if ((error as Error).message.includes('signIn')) {
      return 'signIn';
    }
  }
}
