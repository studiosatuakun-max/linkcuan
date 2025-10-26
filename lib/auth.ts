import { cookies } from 'next/headers';

export type Role = 'guest' | 'seller' | 'affiliate' | 'admin';

export async function getSession() {
  const store = cookies();
  const role = (store.get('lc_role')?.value as Role) || 'guest';
  // Tambah field lain jika perlu (userId, email, dsb)
  return { role };
}

/** Guard sederhana: cek role, kalau tidak sesuai return null */
export async function requireRole(allowed: Role[]) {
  const { role } = await getSession();
  return allowed.includes(role) ? role : null;
}
