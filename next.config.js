/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/contact',
        destination: '/kapcsolat',
      },
      {
        source: '/about',
        destination: '/rolam',
      },
      {
        source: '/index',
        destination: '/',
      },
      {
        source: '/school',
        destination: '/iskola',
      },
      {
        source: '/coaching',
        destination: '/coach',
      },
    ]
  }
}
