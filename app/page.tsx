import { Amenities } from "@/components/sections/amenities";
import { BookingCta } from "@/components/sections/booking-cta";
import { Experience } from "@/components/sections/experience";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { siteConfig } from "@/lib/site-data";

export default function Home() {
  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    image: new URL(
      "/images/nyx-bedroom-teal-night.jpeg",
      siteConfig.siteUrl,
    ).toString(),
    url: siteConfig.siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }}
      />
      <main id="main-content">
        <Hero />
        <Experience />
        <Gallery />
        <Amenities />
        <BookingCta />
      </main>
    </>
  );
}
