import { prisma } from '../lib/db';
import { calcPlatformFee, calcSellerFee } from '../lib/payments/fees';

async function main() {
  // users
  const seller = await prisma.user.create({
    data: { name: 'Seller Demo', email: 'seller@demo.test', role: 'seller' },
  });
  const affiliate = await prisma.user.create({
    data: { name: 'Aff Demo', email: 'aff@demo.test', role: 'affiliate' },
  });
  const buyer = await prisma.user.create({
    data: { name: 'Buyer Demo', email: 'buyer@demo.test', role: 'guest' },
  });

  // products
  const p1 = await prisma.product.create({
    data: { sellerId: seller.id, title: 'Kaos LinkCuan', slug: 'kaos-linkcuan', kind: 'physical', price: 150_000_00, commission: 20_000_00, stock: 100 },
  });
  const p2 = await prisma.product.create({
    data: { sellerId: seller.id, title: 'Template Invoice', slug: 'template-invoice', kind: 'digital', price: 50_000_00, commission: 10_000_00, stock: 9999 },
  });

  // affiliate links
  const l1 = await prisma.affiliateLink.create({
    data: { ownerId: affiliate.id, productId: p1.id, code: 'AFFP1', clicks: 120 },
  });
  const l2 = await prisma.affiliateLink.create({
    data: { ownerId: affiliate.id, productId: p2.id, code: 'AFFP2', clicks: 75 },
  });

  // order via link l1
  const total1 = p1.price;
  const feeSeller1 = calcSellerFee(total1);
  const commission1 = p1.commission;
  const platformFee1 = calcPlatformFee(commission1);
  const net1 = commission1 - platformFee1;

  const order1 = await prisma.order.create({
    data: {
      buyerId: buyer.id,
      status: 'PAID',
      total: total1,
      feeSeller: feeSeller1,
      feePlatform: platformFee1,
      escrowHold: total1 - feeSeller1,
      items: { create: [{ productId: p1.id, qty: 1, price: p1.price }] },
    },
  });

  await prisma.commission.create({
    data: {
      orderId: order1.id,
      affiliateLinkId: l1.id,
      amountGross: commission1,
      platformFee: platformFee1,
      amountNet: net1,
    },
  });

  console.log('Seed done:', { seller: seller.email, affiliate: affiliate.email });
}

main()
  .then(async () => { await prisma.(); })
  .catch(async (e) => { console.error(e); await prisma.(); process.exit(1); });
