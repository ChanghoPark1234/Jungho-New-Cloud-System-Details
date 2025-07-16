/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true
  }
}

// GitHub Pages 배포를 위한 설정 (NODE_ENV가 production일 때만 적용)
if (process.env.NODE_ENV === 'production') {
  nextConfig.output = 'export';
  nextConfig.trailingSlash = true;
  nextConfig.basePath = '/Jungho-New-Cloud-System-Details';
  nextConfig.assetPrefix = '/Jungho-New-Cloud-System-Details/';
}

module.exports = nextConfig 