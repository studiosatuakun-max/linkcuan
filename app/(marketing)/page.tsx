import Hero from './components/Hero';

export default function Page() {
  return (
    <main>
      <Hero />
      <section className="container pb-20">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: 'Fee Transparan', desc: '5% dari seller, 10% dari komisi afiliator.' },
            { title: 'Automation Ads', desc: 'Jalankan iklan otomatis di Meta, TikTok, dan Google.' },
            { title: 'Escrow Aman', desc: 'Pembayaran ditahan sampai pesanan beres.' },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-card border border-white/10 p-6">
              <h3 className="text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-white/75">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
