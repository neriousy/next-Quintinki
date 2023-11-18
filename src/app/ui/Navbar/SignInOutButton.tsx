import { Session } from 'next-auth/types';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { signIn, signOut } from '@/auth';
import { Tooltip } from '@mui/material';

export default function SignInOutButton({
  session,
}: {
  session: Session | null;
}) {
  if (session) {
    return (
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <Tooltip title="Wyloguj się">
          <Button type="submit">
            <LogoutIcon className="flex items-center text-navText hover:text-blue-300 text-5xl" />
          </Button>
        </Tooltip>
      </form>
    );
  }

  return (
    <form
      action={async () => {
        'use server';
        await signIn('discord');
      }}
    >
      <Button type="submit" className="text-navText hover:text-blue-300">
        Zaloguj się
      </Button>
    </form>
  );
}
