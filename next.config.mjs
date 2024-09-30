/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'admin.guisrilanka.com',
                port: '', // leave empty for default port
                pathname: '/**', // adjust the pathname as needed
            },
        ],
    },
};

export default nextConfig;
