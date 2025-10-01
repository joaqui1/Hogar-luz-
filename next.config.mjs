/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
<<<<<<< HEAD
=======
  output: 'export', // 👈 Esto activa la exportación estática
>>>>>>> c278cac9c426a7e39011e20a648c1e435225e727
}

export default nextConfig
