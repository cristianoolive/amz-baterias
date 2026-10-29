import { BatteryCarousel } from "@/components/hero/batterey-carousel";
import { BatteryList } from "@/components/hero/battery-list";
import { Delivery } from "@/components/hero/delivery";
import { Faq, faqJsonLd } from "@/components/hero/faq";
import { GoogleReviews } from "@/components/hero/google-reviews";
import { Introduction } from "@/components/hero/introduction";
import { PartsCarousel } from "@/components/hero/parts-carousel";
import { PaymentMethods } from "@/components/hero/payment-methods";
import { StartStopBatteries } from "@/components/hero/start-stop-batteries";

import { FAQ } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full h-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(FAQ)) }}
      />
      <Introduction />
      <BatteryList />
      <BatteryCarousel />
      <Delivery />
      <PaymentMethods />
      <StartStopBatteries />
      <GoogleReviews />
      <PartsCarousel />
      <Faq />
    </main>
  );
}
