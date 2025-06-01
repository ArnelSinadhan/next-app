import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const protectedPaths = ["/newsfeed"];
const publicPaths = ["/auth/login"]; // Add any other public-only routes here

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("token");

  // 🔒 Redirect unauthenticated users from protected routes
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      const loginUrl = new URL("/auth/login", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 🔁 Redirect authenticated users away from public routes
  if (publicPaths.some((path) => pathname.startsWith(path))) {
    if (token) {
      const homeUrl = new URL("/newsfeed", req.url);
      return NextResponse.redirect(homeUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/newsfeed/:path*", // protect
    "/auth/login", // redirect if logged in
  ],
};
