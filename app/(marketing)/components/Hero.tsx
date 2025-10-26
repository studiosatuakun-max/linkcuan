'use client';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      {/* soft gradient background */}
      <div className='pointer-events-none absolute inset-0'>
        <div className='hero-gradient' />
      </div>

      <div className='container relative py-14 md:py-20'>
        <div className='max-w-2xl'>
          <span className='inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80'>
            <span className='inline-block h-2 w-2 rounded-full bg-brand'></span>
            PT Studio Satu Akun
          </span>

          <h1 className='mt-4 text-4xl md:text-5xl font-extrabold leading-tight'>
            Satu Link <span className='text-brand'>Banyak Cuan</span>
          </h1>
          <p className='mt-3 text-base md:text-lg text-white/80'>
            Jual <b>produk fisik</b>, <b>produk digital</b>, dan <b>jasa</b> dalam satu platform.
            Escrow aman, komisi afiliasi otomatis, dan Automation Ads siap scale.
          </p>

          <div className='mt-6 flex flex-wrap gap-3'>
            <Link href='/seller/create' className='btn'>
              Mulai sebagai Seller
            </Link>
            <Link
              href='/affiliate'
              className='inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 font-semibold hover:bg-white/5 transition'
            >
              Jadi Afiliator
            </Link>
          </div>

          <ul className='mt-6 grid gap-2 text-white/70 text-sm'>
            <li>• Fee transparan: 5% seller & 10% dari komisi afiliator</li>
            <li>• Hybrid Unlock: 1 slot awal, +1 tiap 10 invite, fast-track berbayar</li>
            <li>• PWA mobile-first, siap deploy dan scale</li>
          </ul>
        </div>

        {/* Stat strip */}
        <div className='mt-10 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-card/80 p-4 md:max-w-xl'>
          {[
            { k: 'Produk', v: '2 Jenis + Jasa' },
            { k: 'Escrow', v: 'Otomatis' },
            { k: 'Ads', v: 'Auto-Optimize' },
          ].map((s) => (
            <div key={s.k} className='rounded-lg bg-white/5 p-3 text-center'>
              <div className='text-xs text-white/70'>{s.k}</div>
              <div className='text-sm font-semibold mt-1'>{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

