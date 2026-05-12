import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical host is jmwprojects.vercel.app (no dash).
      // Redirect the dashed default alias permanently.
      {
        source: "/:path*",
        has: [{ type: "host", value: "jmw-projects.vercel.app" }],
        destination: "https://jmwprojects.vercel.app/:path*",
        permanent: true,
      },
      // Legacy bookmark: jmwos.vercel.app/ → canonical /os
      {
        source: "/",
        has: [{ type: "host", value: "jmwos.vercel.app" }],
        destination: "https://jmwprojects.vercel.app/os",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
