/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  rewrites: async function () {
    return [
      {
        source: '/avocado/:path*',
        destination: '/product/:path*'
      }
    ]
  }
}
