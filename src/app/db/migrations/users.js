const { db } = require('@vercel/postgres');

async function users(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        discord_id VARCHAR(255) PRIMARY KEY,
        discord_nick VARCHAR(255) NOT NULL,
        discord_quintin_nick VARCHAR(255),
        role integer NOT NULL,
        avatar VARCHAR(255)
        );`;

    return {
      createTable,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await users(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err
  );
});
