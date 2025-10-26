export default async function SellerHome() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL + '/api/dashboard/seller' : '/api/dashboard/seller', { cache: 'no-store' });
  const data = await res.json();

  return (
    <main className='container py-16'>
      <h1 className='text-3xl font-bold'>Seller Dashboard</h1>
      {data.empty ? (
        <p className='mt-2 text-white/80'>Belum ada seller. (Setelah seeding, data akan muncul)</p>
      ) : (
        <div className='mt-6 grid gap-4 md:grid-cols-3'>
          <Stat title='Produk' value={data.products} />
          <Stat title='Total Order' value={data.orders} />
          <Stat title='Revenue' value={formatIDR(data.revenueCents)} />
        </div>
      )}
    </main>
  );
}

function Stat({ title, value }: { title: string; value: number | string }) {
  return (
    <div className='rounded-2xl bg-card border border-white/10 p-6'>
      <p className='text-white/70 text-sm'>{title}</p>
      <p className='mt-2 text-2xl font-bold'>{value}</p>
    </div>
  );
}
function formatIDR(cents: number) {
  const idr = Math.round(cents / 100);
  return idr.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });
}
