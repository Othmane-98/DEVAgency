/** @type {import('next').NextConfig} */
const csp = [
  "default-src 'self'",
  "img-src 'self' data: https: blob:",
  "style-src 'self' 'unsafe-inline'",
  "font-src 'self' data: https://fonts.gstatic.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
  "connect-src 'self' https: https://www.google-analytics.com https://region1.google-analytics.com",
  "frame-src 'self' https://www.google.com https://www.google.com/maps https://maps.google.com https://calendly.com https://*.calendly.com",
].join("; ");

const nextConfig = {
  staticPageGenerationTimeout: 120,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/realisation",
        destination: "/realisations",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
