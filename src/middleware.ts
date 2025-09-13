import { ACCESS_TOKEN_KEY } from '@/modules/axios/constants';
import { type NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/', '/home/:path*'],
};

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get(ACCESS_TOKEN_KEY);

  // ! 미로그인 검증
  if (!accessToken) {
    const fullPath = req.nextUrl.pathname + req.nextUrl.search;
    return NextResponse.redirect(new URL(`/login?nextUri=${encodeURIComponent(fullPath)}`, req.url));
  }

  // ! 로그인 상태로 / 접근 방지
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', req.url));
  }
}
