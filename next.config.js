/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/nahuem/tech-blogs-mdx/main/images/**',
          },
        ],
      },
}

module.exports = nextConfig
