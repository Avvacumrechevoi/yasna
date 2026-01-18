/** @type {import('next').NextConfig} */
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath =
  basePathEnv && basePathEnv.startsWith("/") ? basePathEnv : basePathEnv ? `/${basePathEnv}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    domains: ["localhost"],
    formats: ["image/webp", "image/avif"],
    unoptimized: true,
  },
  reactStrictMode: true,
};

export default nextConfig;
