import "./globals.css";

import Script from "next/script";
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";

// import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { WhatsappFloatButton } from "@/components/ui/whatsapp-float-button";
import { CallFloatButton } from "@/components/ui/call-float-button";

const inter = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-secondary",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMZ Peças & Baterias",
  description: "Loja de baterias automotivas e acessórios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head />
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        {/** * Google Tag Manager */}
        <GoogleTagManager gtmId="GTM-MKPJM4R6" />

        {/**
         * Meta Pixel Code
         */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1150888490445747');
            fbq('track', 'PageView');`}
        </Script>

        <div className="min-h-dvh">
          <Navbar
            links={[
              { href: "#baterias", label: "Baterias" },
              { href: "#entrega", label: "Entrega" },
              { href: "#contato", label: "Contato" },
            ]}
          />
          {children}
          <Footer />
          <WhatsappFloatButton />
          <CallFloatButton />

          {/* <SpeedInsights /> */}
        </div>

        <noscript>
          <img
            height="1"
            width="1"
            alt=""
            src="https://www.facebook.com/tr?id=1150888490445747&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
