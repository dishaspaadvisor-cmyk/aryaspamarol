import AboutSection from "@/components/AboutSection";
import GoogleReviews from "@/components/GoogleReviews";
import { reviews } from "@/data/siteData";
import ContactCard from "@/components/ContactCard";

export const metadata = {
  title: "About Arya Spa | Luxury Spa & Wellness",
  description:
    "Learn about Arya Spa, a premium wellness destination offering luxury massages, spa therapies, body treatments, and holistic relaxation.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#faf9f6]">
      <AboutSection />
            <ContactCard/>
       <GoogleReviews reviews={reviews} />
    </main>
  );
}