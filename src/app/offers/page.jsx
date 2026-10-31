import { offerData } from "@/data/siteData";
import OffersSection from "@/components/OffersSection";
import GoogleReviews from "@/components/GoogleReviews";
import { reviews } from "@/data/siteData";
import ContactCard from "@/components/ContactCard";

export const metadata = {
  title:
    "Spa Offers & Massage Packages | Arya Spa Marol Naka, Andheri East Mumbai",

  description:
    "Discover exclusive spa offers at Arya Spa, Marol Naka, Andheri East, Mumbai. Enjoy discounts on body massage, Thai massage, aroma therapy, couple spa packages, luxury wellness treatments, deep tissue massage, and premium spa experiences near you.",

  keywords: [
    "spa offers",
    "massage offers",
    "spa deals",
    "spa packages",
    "massage packages",
    "spa discounts",
    "body massage offers",
    "body spa offers",
    "couple spa offers",
    "spa in Marol Naka",
    "spa in Andheri East",
    "spa in Mumbai",
    "best spa Andheri East",
    "Thai massage",
    "deep tissue massage",
    "luxury spa",
    "wellness spa",
    "body massage near me"
  ],

  openGraph: {
    title:
      "Exclusive Spa Offers | Arya Spa Marol Naka, Andheri East, Mumbai",
    description:
      "Save on luxury spa treatments with exclusive offers at Arya Spa in Andheri East. Enjoy premium massage packages, couple spa deals, Thai massage, and wellness experiences.",
    type: "website",
  },

  alternates: {
    canonical: "https://www.yourdomain.com/offers",
  },
};

export default function OffersPage() {
  return (
    <>
      {/* SEO Hero Section */}
      <section className="bg-gradient-to-b from-[#F8F4EF] to-white py-16">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <span className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Limited Time Wellness Offers
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Exclusive Spa Offers in
            <span className="text-amber-600">
              {" "}Marol Naka, Andheri East
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-3xl mx-auto">
            Enjoy premium spa experiences at special prices with our exclusive
            massage offers. Choose from relaxing body massage, authentic Thai
            massage, aroma therapy, deep tissue massage, couple spa packages,
            and luxury wellness treatments designed to help you relax, refresh,
            and rejuvenate.
          </p>

    
        </div>
      </section>

      <OffersSection data={offerData} />
            <ContactCard/>
       <GoogleReviews reviews={reviews} />

  
    </>
  );
}