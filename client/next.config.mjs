/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        VERCEL_URL: process.env.VERCEL_URL,
        DATABASE_URL: process.env.DATABASE_URL
      },
};

export default nextConfig;
