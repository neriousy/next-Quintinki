import { auth, signIn } from '@/auth';

export default async function Layout() {
  const session = await auth();
  return (
    <>
      <form
        action={async () => {
          'use server';
          await signIn('discord');
        }}
      >
        <button>Sign in with Discord</button>
      </form>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
