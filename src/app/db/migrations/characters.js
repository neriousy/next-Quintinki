const { db } = require('@vercel/postgres');

async function users(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS characters (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        discord_id VARCHAR(255) NOT NULL,
        nickname VARCHAR(255) NOT NULL,
        class integer NOT NULL,
        level integer NOT NULL,
        c_level integer NOT NULL,
        reputation integer,
        CONSTRAINT fk_users FOREIGN KEY(discord_id) REFERENCES users(discord_id)

        )`;

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
