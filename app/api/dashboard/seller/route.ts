import { prisma } from '@/lib/db';
export const runtime = 'nodejs';
export const revalidate = 0;

export async function GET() {
  // Demo: pakai seller pertama
  const seller = await prisma.user.findFirst({ where: { role: 'seller' } });
  if (!seller) return Response.json({ ok: true, empty: true });

  const [_products, _orders, _revenue] = await Promise.all([
    prisma.product.count({ where: { sellerId: seller.id } }),
    prisma.order.count({ where: { items: { some: { product: { sellerId: seller.id } } } } }),
    prisma.order.aggregate({
      _sum: { total: true },
      where: { status: { in: ['PAID', 'FULFILLED'] }, items: { some: { product: { sellerId: seller.id } } } },
    }),
  ]);

  return Response.json({
    ok: true,
    sellerId: seller.id,
    products: _products,
    orders: _orders,
    revenueCents: _revenue._sum.total ?? 0,
  });
}
