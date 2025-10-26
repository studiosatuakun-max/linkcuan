import type { NextRequest } from 'next/server';

export function middleware(_req: NextRequest) {
  // Taruh logic keamanan/ratelimit di sini kalau perlu.
  return;
}

export const config = {
  matcher: ['/seller/:path*', '/affiliate/:path*'],
};
