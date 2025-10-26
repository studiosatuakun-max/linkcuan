import { prisma } from '@/lib/db';
import { slugify } from '@/lib/slug';

export const runtime = 'nodejs';
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, kind, priceIdr, commissionIdr, stock } = body ?? {};

    if (!title || !kind) {
      return Response.json({ ok: false, message: 'Judul dan tipe wajib diisi.' }, { status: 400 });
    }
    if (!['physical','digital','service'].includes(kind)) {
      return Response.json({ ok: false, message: 'Tipe produk tidak valid.' }, { status: 400 });
    }

    // Konversi IDR -> cents (angka basis 100)
    const priceCents = Math.max(0, Math.round(Number(priceIdr || 0) * 100));
    const commissionCents = Math.max(0, Math.round(Number(commissionIdr || 0) * 100));

    // Ambil seller pertama (MVP). Nanti ganti dengan session user.
    const seller = await prisma.user.findFirst({ where: { role: 'seller' } });
    if (!seller) {
      return Response.json({ ok: false, message: 'Seller belum tersedia. Buat akun seller terlebih dahulu.' }, { status: 400 });
    }

    const baseSlug = slugify(title);
    let finalSlug = baseSlug;
    let i = 1;
    // Pastikan slug unik
    while (await prisma.product.findUnique({ where: { slug: finalSlug } })) {
      finalSlug = ${baseSlug}-;
    }

    const created = await prisma.product.create({
      data: {
        sellerId: seller.id,
        title,
        slug: finalSlug,
        kind,                 // 'physical' | 'digital' | 'service'
        price: priceCents,
        commission: commissionCents,
        stock: kind === 'physical' ? (Number.isFinite(Number(stock)) ? Number(stock) : 0) : null,
      },
    });

    return Response.json({ ok: true, id: created.id, slug: created.slug });
  } catch (e: any) {
    console.error(e);
    return Response.json({ ok: false, message: 'Terjadi kesalahan sistem.' }, { status: 500 });
  }
}
