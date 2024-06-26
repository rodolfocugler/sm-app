/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "build",
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'smradioprotecao.com.br',
                port: '',
                pathname: '/**',
            },
        ],
        loader: 'custom',
        loaderFile: './src/app/my-loader.js',
    },
};

export default nextConfig;
