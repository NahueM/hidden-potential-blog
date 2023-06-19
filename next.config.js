/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
