import { auth } from '@/auth';
import Image from 'next/image';
import SignInOutButton from './SignInOutButton';
import Links from './Links';
import { Tooltip } from '@mui/material';

export default async function Navbar() {
  const session = await auth();
  const image = session?.user?.image;
  const nick = session?.nick;
  console.log(session);

  return (
    <header className="w-full border-white box shadow-divider">
      <nav className="py-4 w-full flex justify-center">
        <ul className="flex items-center w-10/12 text-navText text-lg">
          <li>
            <Image
              src={'/Quintin.png'}
              alt="Quintin logo"
              width={150}
              height={150}
            />
          </li>

          <Links />

          <li className="flex items-center ml-auto mr-3 gap-3">
            <span className="text-2xl">{nick}</span>
            {image && (
              <Image
                src={image}
                alt="Profile picture"
                width={50}
                height={50}
                className="rounded-full"
              />
            )}
          </li>

          <li>
            <SignInOutButton session={session} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
