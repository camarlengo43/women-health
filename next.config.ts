import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // Migración progresiva: categoría antigua -> hub canónico (sin romper URLs)
      {
        source: '/categoria/perimenopausia',
        destination: '/perimenopausia',
        permanent: true,
      },
      {
        source: '/categoria/perimenopausia/:path*',
        destination: '/perimenopausia/:path*',
        permanent: true,
      },
      {
        source: '/categoria/menopausia',
        destination: '/menopausia',
        permanent: false,
      },
    ]
  },
};

export default nextConfig;
