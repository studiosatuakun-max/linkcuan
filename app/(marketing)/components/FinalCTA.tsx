import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="container pb-24">
      <div className="rounded-2xl bg-card border border-white/10 p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold">Siap mulai? <span className="text-brand">Satu Link Banyak Cuan</span></h2>
        <p className="mt-3 text-white/75">Gabung sekarang sebagai Seller atau Afiliator, dan aktifkan Automation Ads saat butuh scale.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/seller" className="btn">Mulai sebagai Seller</Link>
          <Link href="/affiliate" className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 font-semibold hover:bg-white/5 transition">Jadi Afiliator</Link>
        </div>
      </div>
    </section>
  );
}
