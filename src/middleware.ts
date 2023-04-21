import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  console.log("middleware is running on " + request.nextUrl.href + " (" + request.method + ")");

  if(request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("middleware will redirecting '/products/1004' to '/products'");
    return NextResponse.redirect(new URL("/products", request.url));
  }
}

export const config = {
  matcher: ['/products/:path*'],
};
