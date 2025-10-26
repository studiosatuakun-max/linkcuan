export default function HowItWorks() {
  const steps = [
    { k: '1', title: 'Seller upload produk', desc: 'Fisik, digital, atau jasa. Atur harga & komisi afiliasi.' },
    { k: '2', title: 'Afiliator promosi', desc: 'Bagikan link unik. Klik & konversi dilacak otomatis.' },
    { k: '3', title: 'Buyer bayar', desc: 'Pembayaran masuk escrow. Aman buat semua pihak.' },
    { k: '4', title: 'Auto bagi hasil', desc: 'Komisi & fee dibagi otomatis saat pesanan beres.' },
  ];
  return (
    <section className="container pb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Cara Kerja</h2>
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map(s => (
          <div key={s.k} className="rounded-2xl bg-card border border-white/10 p-6">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold">{s.k}</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="text-white/75 mt-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
