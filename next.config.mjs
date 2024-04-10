// /** @type {import('next').NextConfig} */
// const nextConfig = {

// };

// export default nextConfig;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Assuming your images use HTTPS (adjust if different)
        hostname: 'api.saskaraputra.com',
      },
      {
        protocol: 'http', // Assuming your images use HTTPS (adjust if different)
        hostname: 'localhost',
      },
    ],
  },
}
// module.exports = nextConfig
export default nextConfig;
