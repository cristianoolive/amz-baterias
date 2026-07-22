import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';

  script-src
    'self'
    'unsafe-inline'
    'unsafe-eval'
    https://www.googletagmanager.com
    https://tagmanager.google.com
    https://www.google-analytics.com
    https://ssl.google-analytics.com
    https://www.googleadservices.com
    https://googleads.g.doubleclick.net
    https://bid.g.doubleclick.net
    https://www.google.com
    https://google.com
    https://connect.facebook.net
    https://www.facebook.com
    https://cdnjs.cloudflare.com;

  style-src
    'self'
    'unsafe-inline'
    https://tagmanager.google.com
    https://fonts.googleapis.com;

  font-src
    'self'
    https://fonts.gstatic.com
    data:;

  connect-src
    'self'
    https://www.google-analytics.com
    https://ssl.google-analytics.com
    https://www.googletagmanager.com
    https://www.googleadservices.com
    https://googleads.g.doubleclick.net
    https://connect.facebook.net
    https://cdnjs.cloudflare.com;

  img-src
    'self'
    https://www.googletagmanager.com
    https://tagmanager.google.com
    https://ssl.gstatic.com
    https://www.gstatic.com
    https://www.google-analytics.com
    https://googleads.g.doubleclick.net
    https://www.google.com
    https://google.com
    https://www.facebook.com
    https://fonts.gstatic.com
    data:;

  frame-src
    'self'
    https://www.googletagmanager.com
    https://tagmanager.google.com
    https://bid.g.doubleclick.net
    https://www.google.com
    https://b190ba2cb2404ee5a665c186c36bc2e1.elf.site;
`;

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
];

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // A hospedagem não aguenta o processamento sob demanda do Next.js
    // (retorna 503 quando várias imagens são otimizadas ao mesmo tempo).
    // As imagens já são pré-otimizadas manualmente antes do build.
    unoptimized: true,
  },
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
