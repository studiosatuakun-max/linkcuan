'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/seller', label: 'Seller' },
  { href: '/affiliate', label: 'Afiliator' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Tutup menu saat resize ke desktop atau navigasi
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/60 backdrop-blur supports-[backdrop-filter]:bg-bg/40">
      <nav className="container h-14 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="font-extrabold text-lg leading-none">
          <span className="text-brand">Link</span>Cuan
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-4">
          {links.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="px-3 py-2 rounded-lg hover:bg-white/5 text-sm"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/(auth)/login"
            className="border border-white/15 rounded-lg px-3 py-2 hover:bg-white/5 text-sm"
          >
            Masuk
          </Link>
          <Link href="/(auth)/register" className="btn text-sm px-3 py-2">
            Daftar
          </Link>
        </div>

        {/* Mobile: hamburger */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/5"
        >
          {/* icon burger / close pakai css sederhana */}
          <div className="relative w-5 h-5">
            <span
              className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition-transform ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition-opacity ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition-transform ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-bg/95">
          <div className="container py-3">
            <ul className="flex flex-col">
              {links.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-3 rounded-lg hover:bg-white/5 text-sm"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex gap-2">
              <Link
                href="/(auth)/login"
                onClick={() => setOpen(false)}
                className="flex-1 border border-white/15 rounded-lg px-3 py-2 text-center hover:bg-white/5 text-sm"
              >
                Masuk
              </Link>
              <Link
                href="/(auth)/register"
                onClick={() => setOpen(false)}
                className="flex-1 btn text-sm px-3 py-2 text-center"
              >
                Daftar
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
