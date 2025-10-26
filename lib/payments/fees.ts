export function calcSellerFee(totalCents: number) {
  return Math.round(totalCents * 0.05); // 5%
}
export function calcPlatformFee(commissionCents: number) {
  return Math.round(commissionCents * 0.10); // 10% dari komisi afiliator
}
