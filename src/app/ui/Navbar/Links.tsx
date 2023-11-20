'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Links() {
  const pathname = usePathname();

  return (
    <>
      <NavLink text="Strona główna" href="/" active={pathname === '/'} />
      <NavLink
        text="Lista członków"
        href="/famlist"
        active={pathname === '/famlist'}
      />
      <NavLink
        text="Reputacja"
        href="/reputation"
        active={pathname === '/reputation'}
      />
      <NavLink
        text="Kontakt"
        href="/contact"
        active={pathname === '/contact'}
      />
    </>
  );
}

function NavLink({
  text,
  href,
  active,
}: {
  text: string;
  href: string;
  active?: boolean;
}) {
  const color = active ? 'text-blue-400' : 'text-navText';
  return (
    <li className={`${color} hover:text-blue-300`}>
      <Link href={href}>{text}</Link>
    </li>
  );
}
