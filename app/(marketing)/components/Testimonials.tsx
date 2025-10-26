export default function Testimonials() {
  const t = [
    { name: 'Ayu (Seller)', quote: 'Fee 5% gampang dihitung, escrow bikin aman. Komisi afiliasi jalan otomatis.' },
    { name: 'Rama (Afiliator)', quote: 'Hybrid Unlock enak, bisa ngebut pake fast-track. Laporan rapi.' },
    { name: 'Nisa (Kreator)', quote: 'Automation Ads bantu scale kampanye tanpa mikirin dashboard ads.' },
  ];
  return (
    <section className="container pb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimoni</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {t.map(x => (
          <figure key={x.name} className="rounded-2xl bg-card border border-white/10 p-6">
            <blockquote className="text-white/80">“{x.quote}”</blockquote>
            <figcaption className="mt-3 text-sm text-white/60">— {x.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
