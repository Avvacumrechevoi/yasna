import bundleAnalyzer from "@next/bundle-analyzer";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const basePath =
  basePathEnv && basePathEnv.startsWith("/") ? basePathEnv : basePathEnv ? `/${basePathEnv}` : "";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value:
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; " +
      "style-src 'self' 'unsafe-inline' https:; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' data: https:; " +
      "connect-src 'self' https:; " +
      "frame-src 'self' https:; " +
      "object-src 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self' https:;",
  },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-XSS-Protection", value: "0" },
];

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
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

export default withSentryConfig(withBundleAnalyzer(nextConfig), sentryWebpackPluginOptions);
