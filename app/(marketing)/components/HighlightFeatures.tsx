export default function HighlightFeatures() {
  const feats = [
    { title: 'Smart Analytics', desc: 'Pantau klik, CTR, konversi, ROI iklan, dan performa afiliasi.' },
    { title: 'Sistem Level Seller', desc: 'Starter → Active → Pro → Elite → Partner; fitur bertambah tiap level.' },
    { title: 'Unlock Berbayar', desc: 'Akses cepat ke fitur premium tanpa nunggu performa.' },
    { title: 'PWA & Mobile-first', desc: 'Akses cepat dari link afiliasi; ringan & siap hybrid app.' },
  ];
  return (
    <section className="container pb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Fitur Unggulan</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {feats.map(f => (
          <div key={f.title} className="rounded-2xl bg-card border border-white/10 p-6">
            <h3 className="font-semibold">{f.title}</h3>
            <p className="mt-2 text-white/75">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
