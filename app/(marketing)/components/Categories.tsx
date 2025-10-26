import Link from 'next/link';

export default function Categories() {
  const cats = [
    { title: 'Produk Fisik', desc: 'Fashion, skincare, merchandise, buku, dan lain-lain.', hint: 'Kelola stok, variasi, dan pengiriman.' },
    { title: 'Produk Digital', desc: 'E-book, template, kursus, tools, lisensi.', hint: 'Auto-delivery setelah pembayaran.' },
    { title: 'Jasa', desc: 'Desain, konsultasi, editing video, tutor online, dll.', hint: 'Jadwal fleksibel, briefing, milestone.' },
  ];
  return (
    <section id='kategori' className='container pb-16'>
      <div className='flex items-end justify-between gap-4'>
        <h2 className='text-2xl md:text-3xl font-bold'>Kategori Produk</h2>
        <Link href='/seller' className='text-sm text-brand hover:underline'>Jual sekarang →</Link>
      </div>

      <div className='mt-6 grid gap-4 md:grid-cols-3'>
        {cats.map((c) => (
          <article key={c.title} className='rounded-2xl bg-card border border-white/10 p-6 flex flex-col'>
            <h3 className='text-lg font-bold'>{c.title}</h3>
            <p className='mt-2 text-white/75'>{c.desc}</p>
            <p className='mt-1 text-white/60 text-sm'>{c.hint}</p>
            {c.title === 'Jasa' ? (
              <Link href='/seller' className='mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm hover:bg-white/15'>
                Jual Jasa Sekarang
                <span aria-hidden>↗</span>
              </Link>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
