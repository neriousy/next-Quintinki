'use server';

import { sql } from '@vercel/postgres';
import { User } from './types';

export async function getUser(discord_id: string): Promise<User | undefined> {
  if (!discord_id) return undefined;

  const user = await sql<User>`
    SELECT * FROM users
    WHERE discord_id=${discord_id};
  `;

  return user.rows[0];
}

export async function addUser(user: User) {
  try {
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
