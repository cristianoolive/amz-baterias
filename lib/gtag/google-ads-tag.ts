// lib/googleAds.ts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackGoogleAdsConversion(value = 1.0, currency = "BRL") {
  if (!window.gtag) return;

  window.gtag("event", "conversion", {
    send_to: "AW-17351481501/_CZXCIGj_PEbEJ2x6tFA",
    value,
    currency,
  });
}
