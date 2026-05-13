import { NextRequest, NextResponse } from "next/server";

// Cookie-based gate for /os. The in-page "Operator" modal sets this cookie —
// one password, no browser-native Basic Auth popup.
//
// Next.js 16 renamed `middleware.ts` -> `proxy.ts`; the function must be
// named `proxy` (not `middleware`).
const SITE_PASSWORD = (process.env.SITE_PASSWORD || "jmwprojects").trim();
const COOKIE_NAME = "jmwp_unlocked";

export function proxy(req: NextRequest) {
  const cookie = req.cookies.get(COOKIE_NAME)?.value;
  if (cookie === SITE_PASSWORD) {
    return NextResponse.next();
  }
  // No valid cookie — bounce back to the landing page so the user can unlock
  // via the same in-page modal. No second sign-in prompt.
  const url = req.nextUrl.clone();
  url.pathname = "/";
  url.searchParams.set("unlock", "1");
  return NextResponse.redirect(url);
}

export const config = {
  // Only gate the /os tree. The portfolio at / stays public.
  matcher: ["/os", "/os/:path*"],
};
