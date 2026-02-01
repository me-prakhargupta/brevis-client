import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies?.get("accessToken")?.value;
    const { pathname } = req.nextUrl;

    if(pathname.startsWith("/me") && !token) {
        return NextResponse.redirect(new URL("/accounts/signin", req.url));
    }

    const loggedRoutes = [
        "/accounts",
        "/choose",
        "/thoughts",
        "to/",
    ]

    const isLogged = loggedRoutes.some(route => pathname.startsWith(route));

    if(isLogged && token) {
        return NextResponse.redirect(new URL("/me", req.url));
    }

    return NextResponse.next();
};

export const config = {
  matcher: [
    "/me/:path*",
    "/accounts/:path*",
    "/choose",
    "/thoughts/:path*",
    "/to/:path*",
  ],
};