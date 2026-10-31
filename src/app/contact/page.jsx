import ContactCard from "@/components/ContactCard";
import GoogleReviews from "@/components/GoogleReviews";
import { reviews } from "@/data/siteData";

export const metadata = {
  title:
    "Contact Arya Spa | Luxury Spa in Marol Naka, Andheri East, Mumbai",
  description:
    "Contact Arya Spa in Marol Naka, Andheri East, Mumbai to book Swedish Massage, Thai Massage, Deep Tissue Massage, Couple Spa, Aroma Therapy, Hot Stone Massage and premium wellness treatments. Call or WhatsApp for instant booking.",
  keywords: [
    "Arya Spa Contact",
    "Spa in Marol Naka",
    "Spa Andheri East Mumbai",
    "Massage Centre Marol",
    "Luxury Spa Mumbai",
    "Thai Massage Andheri East",
    "Swedish Massage Mumbai",
    "Deep Tissue Massage Marol",
    "Couple Spa Mumbai",
    "Body Massage Marol Naka",
    "Spa Near Marol Metro Station",
    "Wellness Spa Andheri East",
  ],
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#f5ece7] pt-32 pb-20 text-[#7514ad]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-5 py-2 rounded-full bg-[#7514ad] text-white font-semibold uppercase tracking-wider text-sm">
            Contact Arya Spa • Marol Naka, Andheri East, Mumbai
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Contact Arya Spa Marol Naka, Andheri East, Mumbai
          </h1>

          <p className="mt-6 max-w-4xl mx-auto text-lg text-gray-600 leading-8">
            Book your luxury spa and massage appointment at <strong>Arya Spa</strong>,
            conveniently located at <strong>Unit/Gala C-1, Hind Saurashira
            Industrial Estate, Marol Naka, Andheri East, Mumbai – 400059,
            Maharashtra</strong>. Our experienced therapists offer Swedish
            Massage, Thai Massage, Deep Tissue Massage, Aroma Therapy,
            Hot Stone Massage, Couple Spa, Body Scrub, Balinese Massage, and
            premium wellness treatments in a clean, peaceful, and private
            environment. Contact us today by phone or WhatsApp for instant
            booking and enjoy a relaxing spa experience in the heart of
            Andheri East.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <ContactCard />

      {/* Google Reviews */}
      <GoogleReviews reviews={reviews} />
    </>
  );
}