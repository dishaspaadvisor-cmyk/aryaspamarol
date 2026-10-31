import { siteData } from "@/data/siteData";
import ServicesGrid from "@/components/ServicesGrid";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import GoogleReviews from "@/components/GoogleReviews";
import { reviews } from "@/data/siteData";
import ContactCard from "@/components/ContactCard";

export const metadata = {
  title:
    "Spa Services | Body Massage, Thai Massage & Couple Spa | Arya Spa Marol Naka, Andheri East Mumbai",
  description:
    "Explore premium spa services at Arya Spa in Marol Naka, Andheri East, Mumbai. Enjoy body massage, Thai massage, deep tissue massage, aroma therapy, couple spa, relaxation treatments, wellness therapies, and luxury spa experiences near you.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className=" overflow-hidden bg-gradient-to-br bg-[#f8f7f4] text-[#7514AD]">
        {/* Decorative Blur */}
        <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative mx-10 max-w-8xl px-6 py-24 md:py-15 text-center">
       

          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Premium Spa Services in
            <span className="block text-[#7514AD]">
              Marol Naka, Andheri East
            </span>
          </h1>

          <p className="mx-auto mt-0 max-w-3xl text-lg leading-8 text-gray-800">
            Experience complete relaxation with professional Body Massage,
            Thai Massage, Deep Tissue Massage, Aroma Therapy, Couple Spa,
            Wellness Treatments, and Luxury Spa Services in Andheri East,
            Mumbai.
          </p>
                  </div>
      </section>

      <ServicesGrid data={siteData} />
      <ContactCard/>
       <GoogleReviews reviews={reviews} />
    
    </main>
  );
}