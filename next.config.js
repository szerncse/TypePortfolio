/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['via.placeholder.com'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "via.placeholder.com",
                port: '',
            }
        ]
    }
}

module.exports = nextConfig

