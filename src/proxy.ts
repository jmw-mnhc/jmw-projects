import { NextRequest, NextResponse } from "next/server";

// Edge-runtime-safe Basic Auth gate. Password is provided via SITE_PASSWORD
// env var on Vercel; defaults to "jmwdemo" so local dev just works.
//
// Next.js 16 renamed `middleware.ts` -> `proxy.ts`. The function must also be
// named `proxy` (not `middleware`).
// Trim handles the case where `echo "jmwdemo" | vercel env add` saved the
// value with a trailing newline character.
const SITE_PASSWORD = (process.env.SITE_PASSWORD || "jmwdemo").trim();
const SITE_USER = (process.env.SITE_USER || "jmw").trim();

export function proxy(req: NextRequest) {
  const auth = req.headers.get("authorization");
  if (auth?.startsWith("Basic ")) {
    try {
      const decoded = atob(auth.slice(6));
      const idx = decoded.indexOf(":");
      const user = idx === -1 ? "" : decoded.slice(0, idx);
      const pass = idx === -1 ? decoded : decoded.slice(idx + 1);
      if (
        pass === SITE_PASSWORD &&
        (SITE_USER === "*" || user === SITE_USER || user === "")
      ) {
        return NextResponse.next();
      }
    } catch {
      // fall through to 401
    }
  }
  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="JMW OS", charset="UTF-8"',
    },
  });
}

export const config = {
  // Only gate the /os tree. The portfolio at / stays public.
  matcher: ["/os", "/os/:path*"],
};
