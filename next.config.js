/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',
  trailingSlash: true,
  basePath: '/Jungho-New-Cloud-System-Details',
  assetPrefix: '/Jungho-New-Cloud-System-Details/',
  images: {
    unoptimized: true
  },
  // 정적 내보내기에서는 headers 설정 제거
}

module.exports = nextConfig 