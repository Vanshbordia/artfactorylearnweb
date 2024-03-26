/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'learn.artfactory.org.in',
                port: '',
                pathname: '/**',
            },
        ],
    },
    basePath: "/learn",
};

export default nextConfig;
