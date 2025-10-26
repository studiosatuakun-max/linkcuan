'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/(marketing)', label: 'Home' },
  { href: '/seller', label: 'Seller' },
  { href: '/affiliate', label: 'Afiliator' },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="border-b border-white/10 bg-bg/60 backdrop-blur supports-[backdrop-filter]:bg-bg/40">
      <nav className="container h-14 flex items-center justify-between">
        <Link href="/(marketing)" className="font-extrabold">
          <span className="text-brand">Link</span>Cuan
        </Link>
        <ul className="flex items-center gap-4">
          {nav.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className={"px-3 py-1 rounded-lg hover:bg-white/5 " + (pathname?.startsWith(n.href) ? "bg-white/10" : "")}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <Link href="/(auth)/login" className="border border-white/15 rounded-lg px-3 py-1 hover:bg-white/5">Masuk</Link>
          <Link href="/(auth)/register" className="btn">Daftar</Link>
        </div>
      </nav>
    </header>
  );
}

