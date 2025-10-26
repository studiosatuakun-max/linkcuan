import { ReactNode } from 'react';
import Link from 'next/link';
import { requireRole } from '@/lib/auth';

export default async function SellerLayout({ children }: { children: ReactNode }) {
  const ok = await requireRole(['seller', 'admin']);
  if (!ok) {
    return (
      <main className='container py-16'>
        <h1 className='text-2xl font-bold'>Akses terbatas</h1>
        <p className='mt-2 text-white/80'>Kamu perlu role <b>seller</b> untuk membuka halaman ini.</p>
        <div className='mt-6 flex gap-3'>
          <Link href='/(auth)/login' className='btn'>Masuk</Link>
          <button
            onClick={() => document.cookie = 'lc_role=seller; path=/'}
            className='inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 font-semibold hover:bg-white/5 transition'
          >Dev: Set role seller (cookie)</button>
        </div>
      </main>
    );
  }
  return <>{children}</>;
}
