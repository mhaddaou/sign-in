/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {nextConfig,
  env: {
    Clouad : 'https://api.cloudinary.com/v1_1/daczu80rh/upload',
  },
  images: {
    unoptimized: true,
  },
}
