'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type Kind = 'physical' | 'digital' | 'service';

export default function CreateProductPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [kind, setKind] = useState<Kind>('physical');
  const [priceIdr, setPriceIdr] = useState<number | ''>('');
  const [commissionIdr, setCommissionIdr] = useState<number | ''>('');
  const [stock, setStock] = useState<number | ''>('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setErr(null); setMsg(null);
    try {
      const res = await fetch('/api/seller/products', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ title, kind, priceIdr: Number(priceIdr || 0), commissionIdr: Number(commissionIdr || 0), stock }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setErr(data?.message || 'Gagal membuat produk.');
      } else {
        setMsg('Produk berhasil dibuat.');
        // Arahkan ke dashboard seller (bisa diganti ke detail produk)
        setTimeout(() => router.push('/seller'), 600);
      }
    } catch {
      setErr('Tidak dapat terhubung ke server.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className='container py-10'>
      <h1 className='text-2xl md:text-3xl font-bold'>Mulai Jual</h1>
      <p className='mt-2 text-white/80'>Buat listing baru untuk produk fisik, digital, atau jasa.</p>

      <form onSubmit={onSubmit} className='mt-6 grid gap-4 max-w-2xl'>
        <div className='grid gap-2'>
          <label className='text-sm text-white/80'>Judul</label>
          <input
            className='rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20'
            placeholder='Contoh: Desain Logo Profesional / Kaos LinkCuan'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className='grid gap-2'>
          <label className='text-sm text-white/80'>Tipe</label>
          <div className='grid grid-cols-3 gap-2'>
            {(['physical','digital','service'] as Kind[]).map(k => (
              <button
                key={k}
                type='button'
                onClick={() => setKind(k)}
                className={'rounded-xl px-3 py-2 border ' + (kind === k ? 'bg-brand text-bg border-brand' : 'bg-white/5 border-white/10 hover:bg-white/10')}
              >
                {k === 'physical' ? 'Produk Fisik' : k === 'digital' ? 'Produk Digital' : 'Jasa'}
              </button>
            ))}
          </div>
        </div>

        <div className='grid gap-2 md:grid-cols-2'>
          <div className='grid gap-2'>
            <label className='text-sm text-white/80'>Harga (IDR)</label>
            <input
              inputMode='numeric'
              className='rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20'
              placeholder='cth: 150000'
              value={priceIdr}
              onChange={(e) => setPriceIdr(e.target.value === '' ? '' : Number(e.target.value.replace(/\D/g,'')))}
            />
          </div>
          <div className='grid gap-2'>
            <label className='text-sm text-white/80'>Komisi Afiliasi (IDR)</label>
            <input
              inputMode='numeric'
              className='rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20'
              placeholder='cth: 20000'
              value={commissionIdr}
              onChange={(e) => setCommissionIdr(e.target.value === '' ? '' : Number(e.target.value.replace(/\D/g,'')))}
            />
          </div>
        </div>

        {/* Stock hanya untuk produk fisik */}
        {kind === 'physical' && (
          <div className='grid gap-2'>
            <label className='text-sm text-white/80'>Stok</label>
            <input
              inputMode='numeric'
              className='rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-white/20'
              placeholder='cth: 100'
              value={stock}
              onChange={(e) => setStock(e.target.value === '' ? '' : Number(e.target.value.replace(/\D/g,'')))}
            />
          </div>
        )}

        {/* Catatan khusus jasa */}
        {kind === 'service' && (
          <div className='rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/75'>
            Pengaturan spesifik jasa (jadwal, brief, milestone) akan muncul pada langkah berikutnya.
          </div>
        )}

        <div className='flex gap-3 pt-2'>
          <button
            disabled={loading || !title}
            className='btn disabled:opacity-60 disabled:cursor-not-allowed'
          >
            {loading ? 'Menyimpan…' : 'Simpan Listing'}
          </button>
          <button
            type='button'
            onClick={() => router.push('/seller')}
            className='inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-2 font-semibold hover:bg-white/5 transition'
          >
            Batal
          </button>
        </div>

        {msg && <p className='text-emerald-400 text-sm'>{msg}</p>}
        {err && <p className='text-red-400 text-sm'>{err}</p>}
      </form>
    </main>
  );
}
