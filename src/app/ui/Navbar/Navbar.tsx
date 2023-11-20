import Image from 'next/image';
import Links from './Links';
import NavDropdownMenu from './NavMenu';
import { Button } from '@mui/material';
import { auth, signIn } from '@/auth';

export default async function Navbar() {
  const session = await auth();
  const image = session?.user?.image || '';
  const nick = session?.nick;

  return (
    <header className="w-full border-white box shadow-divider">
      <nav className="py-4 w-full flex justify-center">
        <ul className="flex items-center lg:w-11/12 md:w-full gap-3 text-navText text-lg">
          <li>
            <Image
              src={'/Quintin.png'}
              alt="Quintin logo"
              width={150}
              height={150}
              className="h-auto"
            />
          </li>

          <Links />

          {!session && (
            <li className="flex items-center ml-auto mr-3 gap-3">
              <form
                action={async () => {
                  'use server';
                  await signIn('discord');
                }}
              >
                <Button type="submit">Zaloguj się</Button>
              </form>
            </li>
          )}

          {session && (
            <li className="flex items-center ml-auto mr-3 gap-3">
              <span className="text-2xl">{nick}</span>
              <NavDropdownMenu image={image} />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
