'use client';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

const links = [
  { href: '/client', label: 'client' },
  { href: '/drinks', label: 'drinks' },
  { href: '/tasks', label: 'tasks' },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="navbar flex gap-4 bg-base-100 p-4">
      {links.map((link) => (
        <Link
          className={`btn ${link.href === pathname ? 'btn-primary' : 'btn-neutral'} uppercase`}
          href={link.href}
          key={link.label}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};
