import { siteData, offerData, gallerydata, reviews } from "@/data/siteData";

import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import AboutSection from "@/components/AboutSection";
import OffersSection from "@/components/OffersSection";
import GallerySection from "@/components/GallerySection";
import ContactCard from "@/components/ContactCard";
import FAQPage from "@/components/FAQSection";
import GoogleReviews from "@/components/GoogleReviews";
import VirtualTour from "@/components/VirtualTour";

export const metadata = {
  title: "Arya Spa | Luxury Spa & Body Massage in Marol Naka, Andheri East",
  description:
    "Experience premium body massage, Thai massage, aroma therapy, deep tissue massage, couple spa, and luxury wellness treatments at Arya Spa in Marol Naka, Andheri East, Mumbai.",
};

export default function Home() {
  return (
    <>
      <Hero slides={siteData.heroSlides} />

      <ServicesGrid data={siteData} />

      <AboutSection />

      <OffersSection data={offerData} />

      <GallerySection gallery={gallerydata.gallery} />
      <VirtualTour/>

      <ContactCard />

      <FAQPage />

      <GoogleReviews reviews={reviews} />
    </>
  );
}