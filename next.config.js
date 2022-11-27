/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:slug", // :slug will be included in redirects
        destination: "/api/projects/:slug",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
