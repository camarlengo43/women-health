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
      // Consolidación SEO: guías antiguas de nivel superior -> URLs canónicas bajo /movimiento
      {
        source: '/ejercicio-perimenopausia',
        destination: '/movimiento/ejercicio-perimenopausia',
        permanent: true,
      },
      {
        source: '/ejercicio-menopausia',
        destination: '/movimiento/ejercicio-menopausia',
        permanent: true,
      },
      {
        source: '/ejercicios-fuerza-mujeres',
        destination: '/movimiento/ejercicios-fuerza-mujeres',
        permanent: true,
      },
      {
        source: '/rutina-fuerza-menopausia',
        destination: '/movimiento/rutina-fuerza-menopausia',
        permanent: true,
      },
      {
        source: '/ejercicios-salud-osea',
        destination: '/movimiento/salud-osea',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
