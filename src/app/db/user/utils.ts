'use server';

import { User } from './types';
import { sql } from '@vercel/postgres';

export async function getUser(discord_id: string): Promise<User | undefined> {
  try {
    const user =
      await sql<User>`SELECT * FROM users WHERE discord_id=${discord_id}`;
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function addUser(user: User) {
  try {
    console.log('Adding user to database:', user);

    await sql<User>`
    INSERT INTO users (discord_id, discord_nick, discord_quintin_nick, avatar, role)
    VALUES (${user.discord_id}, ${user.discord_nick}, ${user.discord_quintin_nick}, ${user.avatar}, ${user.role})
  `;
  } catch (error) {
    return {
      message: 'Error adding user to database',
    };
  }
}
