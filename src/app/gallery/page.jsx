import GallerySection from "@/components/GallerySection";
import { gallerydata } from "@/data/siteData";
import GoogleReviews from "@/components/GoogleReviews";
import { reviews } from "@/data/siteData";
import ContactCard from "@/components/ContactCard";

export const metadata = {
  title:
    "Spa Gallery | Arya Spa Marol Naka, Andheri East Mumbai | Luxury Massage & Wellness",

  description:
    "Explore the Arya Spa gallery at Marol Naka, Andheri East, Mumbai 400059. Discover luxury spa interiors, premium massage rooms, Thai massage, couple spa, body spa treatments, deep tissue massage, aroma therapy, wellness experiences, and relaxing spa services near you.",

  keywords: [
    "spa near me",
    "spa in Marol Naka",
    "spa in Andheri East",
    "spa in Mumbai",
    "massage spa Marol Naka",
    "massage spa Andheri East",
    "massage spa near me",
    "body spa near me",
    "body spa massage near me",
    "best spa Marol Naka",
    "best spa Andheri East",
    "best spa Mumbai",
    "best massage spa Marol Naka",
    "best massage spa Andheri East",
    "best massage in Andheri East",
    "best body spa in Andheri East",
    "couple spa in Marol Naka",
    "couple massage in Andheri East",
    "couples spa",
    "spa days near me",
    "spa experience",
    "spa near Marol Naka",
    "luxury spa",
    "luxury spa near me",
    "luxury spa in Andheri East",
    "luxury massage spa",
    "massage center in Andheri East",
    "massage service in Marol Naka",
    "body massage spa in Andheri East",
    "body massage center",
    "local spa treatments near me",
    "nearest day spa",
    "nearest spa centre",
    "nearby spa massage",
    "near by spa center",
    "massage spa center near me",
    "massage near me now",
    "massage therapy near me",
    "sports massage near me",
    "deep tissue massage",
    "thai massage near me",
    "aroma thai spa Andheri East",
    "spa wellness center near me",
    "find massage places near me",
    "spa & massage services",
    "massage spa and sauna near me",
    "relaxation spa",
    "wellness spa Mumbai"
  ],

  openGraph: {
    title:
      "Arya Spa Gallery | Luxury Spa in Marol Naka, Andheri East, Mumbai",
    description:
      "Browse Arya Spa's gallery featuring luxury interiors, massage rooms, couple spa, Thai massage, body massage, deep tissue therapy, aroma spa, and premium wellness services in Andheri East, Mumbai.",
    type: "website",
  },

  alternates: {
    canonical: "https://www.yourdomain.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main>
      <GallerySection gallery={gallerydata.gallery} />
            <ContactCard/>
       <GoogleReviews reviews={reviews} />
    </main>
  );
}