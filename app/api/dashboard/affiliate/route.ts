import { prisma } from '@/lib/db';
export const runtime = 'nodejs';
export const revalidate = 0;

export async function GET() {
  // Demo: pakai afiliator pertama
  const aff = await prisma.user.findFirst({ where: { role: 'affiliate' } });
  if (!aff) return Response.json({ ok: true, empty: true });

  const links = await prisma.affiliateLink.findMany({
    where: { ownerId: aff.id },
    include: { commissions: true },
  });

  const clicks = links.reduce((s, l) => s + l.clicks, 0);
  const gross = links.reduce((s, l) => s + l.commissions.reduce((a, c) => a + c.amountGross, 0), 0);
  const platformFee = links.reduce((s, l) => s + l.commissions.reduce((a, c) => a + c.platformFee, 0), 0);
  const net = links.reduce((s, l) => s + l.commissions.reduce((a, c) => a + c.amountNet, 0), 0);

  return Response.json({
    ok: true,
    affiliateId: aff.id,
    links: links.length,
    clicks,
    commission: { gross, platformFee, net },
  });
}
