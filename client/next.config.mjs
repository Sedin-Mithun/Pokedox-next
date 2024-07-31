/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
        DATABASE_URL: process.env.DATABASE_URL
    },
    eslint: {
      ignoreDuringBuilds: tru
    }
    
};

export default nextConfig;
