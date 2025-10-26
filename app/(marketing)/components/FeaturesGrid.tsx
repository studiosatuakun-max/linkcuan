export default function FeaturesGrid() {
  const items = [
    { title: 'Fee Transparan', desc: '5% dari seller, 10% dari komisi afiliator. Tidak ada biaya tersembunyi.' },
    { title: 'Escrow Aman', desc: 'Dana ditahan sampai pesanan beres. Auto-split payment ke pihak terkait.' },
    { title: 'Automation Ads', desc: 'Iklan otomatis ke Meta, TikTok, dan Google. Optimasi tanpa repot.' },
    { title: 'Hybrid Unlock', desc: 'Afiliator dapat 1 slot awal, +1 tiap 10 invite, atau fast-track berbayar.' },
    { title: 'Leveling Seller', desc: 'Fitur terbuka berdasarkan performa (Starter → Partner) atau unlock berbayar.' },
    { title: 'Dashboard Realtime', desc: 'Statistik klik, konversi, komisi, & penjualan — semuanya live.' },
  ];
  return (
    <section className="container pb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Keunggulan LinkCuan</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((f) => (
          <div key={f.title} className="rounded-2xl bg-card border border-white/10 p-6">
            <h3 className="text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-white/75">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
