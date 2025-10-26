export function calcAffiliateSlots(invitedCount: number, paidFastTrack = false) {
  const base = 1;
  const addByInvite = Math.floor(invitedCount / 10); // +1 tiap 10 teman
  const fastTrack = paidFastTrack ? 10 : 0;          // unlock langsung ke total 11
  return Math.min(base + addByInvite + fastTrack, 11);
}
