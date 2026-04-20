import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'
const repo = 'my-site' // เปลี่ยนเป็นชื่อ repo ของคุณ

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repo}` : '',
}

export default nextConfig