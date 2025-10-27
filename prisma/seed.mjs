import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const calcSellerFee = (total) => Math.round(total * 0.05);
const calcPlatformFee = (commission) => Math.round(commission * 0.10);

async function main() {
  const seller = await prisma.user.create({ data: { name: 'Seller Demo', email: 'seller@demo.test', role: 'seller' }});
  const affiliate = await prisma.user.create({ data: { name: 'Aff Demo', email: 'aff@demo.test', role: 'affiliate' }});
  const buyer = await prisma.user.create({ data: { name: 'Buyer Demo', email: 'buyer@demo.test', role: 'guest' }});

  const p1 = await prisma.product.create({
    data: { sellerId: seller.id, title: 'Kaos LinkCuan', slug: 'kaos-linkcuan', kind: 'physical', price: 15000000, commission: 2000000, stock: 100 },
  });
  const p2 = await prisma.product.create({
    data: { sellerId: seller.id, title: 'Template Invoice', slug: 'template-invoice', kind: 'digital', price: 5000000, commission: 1000000, stock: 9999 },
  });

  const l1 = await prisma.affiliateLink.create({ data: { ownerId: affiliate.id, productId: p1.id, code: 'AFFP1', clicks: 120 }});
  await prisma.affiliateLink.create({ data: { ownerId: affiliate.id, productId: p2.id, code: 'AFFP2', clicks: 75 }});

  const total = p1.price;
  const feeSeller = calcSellerFee(total);
  const commission = p1.commission;
  const platformFee = calcPlatformFee(commission);
  const net = commission - platformFee;

  const order = await prisma.order.create({
    data: {
      buyerId: buyer.id,
      status: 'PAID',
      total,
      feeSeller,
      feePlatform: platformFee,
      escrowHold: total - feeSeller,
      items: { create: [{ productId: p1.id, qty: 1, price: p1.price }] },
    },
  });

  await prisma.commission.create({
    data: { orderId: order.id, affiliateLinkId: l1.id, amountGross: commission, platformFee, amountNet: net },
  });

  console.log('✅ Seed done');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });

