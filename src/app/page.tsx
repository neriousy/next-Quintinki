import { auth } from '@/auth';

export default async function Home() {
  const session = await auth();

  return (
    <main className="">
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </main>
  );
}
