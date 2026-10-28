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

const siteUrl = "https://bateriasamz.com.br";
const title = "Bateria em Manaus com Entrega e Instalação Grátis | AMZ Peças & Baterias";
const description =
  "Baterias Moura e Heliar em Manaus com entrega e instalação grátis em até 40 minutos. Pague em até 10x sem juros no cartão ou no Crediário Bemol.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "AMZ Peças & Baterias",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

// Dados da loja para o Google (Maps, resultados locais) e assistentes de IA.
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoPartsStore",
  name: "AMZ Peças & Baterias",
  url: siteUrl,
  telephone: "+55-92-99378-0593",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Dublin, 1504 - Planalto",
    addressLocality: "Manaus",
    addressRegion: "AM",
    postalCode: "69045-080",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  areaServed: ["Manaus", "Amazonas"],
  paymentAccepted: "Cartão de crédito em até 10x sem juros, Crediário Bemol",
  sameAs: [
    "https://www.instagram.com/amzautopecas",
    "https://www.facebook.com/841397619046428",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
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
