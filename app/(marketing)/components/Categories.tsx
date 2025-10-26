export default function Categories() {
  const cats = [
    { title: 'Produk Fisik', desc: 'Fashion, skincare, merchandise, buku, dll.' },
    { title: 'Produk Digital', desc: 'E-book, template, kursus, tools.' },
    { title: 'Produk Jasa', desc: 'Desain, konsultasi, editing video, tutor online.' },
  ];
  return (
    <section className="container pb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Kategori Produk</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {cats.map(c => (
          <article key={c.title} className="rounded-2xl bg-card border border-white/10 p-6">
            <h3 className="text-lg font-bold">{c.title}</h3>
            <p className="mt-2 text-white/75">{c.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
