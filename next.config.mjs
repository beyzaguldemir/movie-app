/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental:{
    appDir:true,
  },
  images:{
    domains:["image.tmdb.org"]
  }
};

export default nextConfig;
