import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy bookmark: jmwos.vercel.app/ → /os
      // The canonical URL is jmw-projects.vercel.app/os.
      {
        source: "/",
        has: [{ type: "host", value: "jmwos.vercel.app" }],
        destination: "/os",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
