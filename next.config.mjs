/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
};

export default nextConfig;