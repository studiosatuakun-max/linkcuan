export default function FeaturesGrid() {
  const items = [
    { title: 'Fee Transparan', desc: '5% dari seller, 10% dari komisi afiliator. Tanpa biaya tersembunyi.' },
    { title: 'Escrow Aman', desc: 'Dana ditahan sampai selesai. Cocok untuk fisik, digital, dan jasa.' },
    { title: 'Automation Ads', desc: 'Iklan otomatis ke Meta, TikTok, Google. Hemat waktu, hasil optimal.' },
    { title: 'Hybrid Unlock', desc: '1 slot awal, +1 tiap 10 invite, atau fast-track berbayar.' },
    { title: 'Leveling Seller', desc: 'Starter → Partner. Fitur terbuka sesuai performa atau unlock premium.' },
    { title: 'Dashboard Realtime', desc: 'Klik, konversi, komisi, penjualan — semua live & mudah dibaca.' },
  ];
  return (
    <section className='container pb-16'>
      <h2 className='text-2xl md:text-3xl font-bold mb-6'>Keunggulan LinkCuan</h2>
      <div className='grid gap-4 md:grid-cols-3'>
        {items.map((f) => (
          <div key={f.title} className='rounded-2xl bg-card border border-white/10 p-6'>
            <h3 className='text-lg font-bold'>{f.title}</h3>
            <p className='mt-2 text-white/75'>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
