export default function Segments() {
  const segs = [
    { title: 'Seller', desc: 'Butuh kanal jualan + afiliasi, fee transparan, dan promosi otomatis.' },
    { title: 'Afiliator', desc: 'Monetize traffic dengan komisi jelas & laporan realtime.' },
    { title: 'Kreator/Freelancer', desc: 'Jual jasa/produk digital + pasang Automation Ads tanpa repot.' },
  ];
  return (
    <section className="container pb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Untuk Siapa?</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {segs.map(s => (
          <div key={s.title} className="rounded-2xl bg-card border border-white/10 p-6">
            <h3 className="text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-white/75">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
