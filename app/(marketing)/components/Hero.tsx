'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <span className="inline-block rounded-full bg-card/60 px-3 py-1 text-sm border border-white/10">
            PT Studio Satu Akun
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
            Satu Link <span className="text-brand">Banyak Cuan</span>
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Jual produk fisik, digital, & jasa. Bagi hasil otomatis dengan escrow.
            Sistem afiliasi <em>Hybrid Unlock</em>, fee transparan (5% seller, 10% dari komisi afiliator),
            plus <strong>Automation Ads</strong> ke Instagram, TikTok, Facebook, dan Google.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/seller"
              className="btn"
            >
              Mulai sebagai Seller
            </Link>
            <Link
              href="/affiliate"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 font-semibold hover:bg-white/5 transition"
            >
              Jadi Afiliator
            </Link>
          </div>

          <ul className="mt-6 grid gap-2 text-white/75">
            <li>• Escrow & auto split payment</li>
            <li>• Dashboard realtime & smart analytics</li>
            <li>• PWA, mobile-first, siap deploy ke Vercel</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-card border border-white/10 p-6 md:p-8">
          <div className="grid gap-4">
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/70">Saldo Escrow</p>
              <p className="text-2xl font-bold">Rp 12.450.000</p>
            </div>
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/70">Konversi Minggu Ini</p>
              <p className="text-2xl font-bold">+18%</p>
            </div>
            <div className="rounded-xl border border-white/10 p-4">
              <p className="text-sm text-white/70">Slot Afiliasi</p>
              <p className="text-2xl font-bold">1/11 <span className="text-sm font-normal text-white/60">(Hybrid Unlock)</span></p>
            </div>
          </div>
          <div className="mt-6 text-sm text-white/60">
            Data dummy untuk demo tampilan.
          </div>
        </div>
      </div>
    </section>
  );
}

