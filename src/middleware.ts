import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { logInfo } from "@/lib/logger";
import { v4 as uuid } from "uuid";


export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // if localhost, replace with 127.0.0.1, this is mostly for dev purposes so
  // that the api calls don't fail when running locally
  if (url.hostname === "localhost") {
    url.hostname = "127.0.0.1"
  }

  // fetch user session
  const { user, expires } = await fetch(`${url.origin}/api/auth/session`, {
    headers: request.headers,
  }).then((res) => res.json());

   // fetch client ip
  const ip = await fetch(`${url.origin}/api/ip`, {
    headers: request.headers,
  }).then((res) => res.json());

  // log requests
  logInfo({
    id: user?.id || "unauthenticated",
    url: request.nextUrl.pathname,
    client_ip: ip.addr,
    method: request.method,
    referrer: request.headers.get("referer"),
    ua: request.headers.get("user-agent"),
    uid: uuid(),
  } as any);

  // if user is authenticated and on the root page, redirect to /hub
  if (user && request.nextUrl.pathname === "/") {
    url.pathname = "/hub";
    return NextResponse.redirect(url);
  }

  // if user is not authenticated and not on the root page, redirect to /
  else if (!user && request.nextUrl.pathname !== "/") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // otherwise, continue
  return NextResponse.next();
}

export const config ={
  matcher: ["/", "/hub", "/hub/:path*"],
};