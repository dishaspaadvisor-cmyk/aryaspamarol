import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OfferPopup from "@/components/OfferPopup";
import { siteData } from "@/data/siteData";
import FloatingButtons from "@/components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://aryaspamarol.in/"), // Replace with your domain

  title: {
    default: "Arya Spa | Luxury Spa & Body Massage in Marol Naka, Andheri East Mumbai",
    template: "%s | Arya Spa",
  },

  description:
    "Arya Spa offers premium body massage, Thai massage, deep tissue massage, aroma therapy, couple spa and luxury wellness treatments in Marol Naka, Andheri East, Mumbai.",

  keywords: [
    "Arya Spa",
    "Spa in Marol Naka",
    "Spa in Andheri East",
    "Body Massage Mumbai",
    "Thai Massage",
    "Deep Tissue Massage",
    "Couple Spa Mumbai",
    "Luxury Spa",
    "Best Spa in Mumbai",
    "Massage Spa Marol",
  ],

  authors: [
    {
      name: "Arya Spa",
    },
  ],

  creator: "Arya Spa",

  publisher: "Arya Spa",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/logo/Arya Spa Marol.png" },
      { url: "/logo/Arya Spa Marol.png", sizes: "32x32", type: "image/png" },
      { url: "/logo/Arya Spa Marol.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/logo/Arya Spa Marol.png",
    shortcut: "/logo/Arya Spa Marol.png",
  },

  openGraph: {
    title:
      "Arya Spa | Luxury Spa & Body Massage in Marol Naka, Andheri East Mumbai",

    description:
      "Experience premium body massage, Thai massage, aroma therapy, couple spa and luxury wellness treatments at Arya Spa.",

    url: "https://aryaspamarol.in/",

    siteName: "Arya Spa",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arya Spa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Arya Spa | Luxury Spa & Body Massage in Marol Naka, Mumbai",

    description:
      "Book luxury spa and massage services at Arya Spa, Marol Naka, Andheri East.",

    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.aryaspa.in",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer data={siteData} />

        <OfferPopup />
        <FloatingButtons />
        {/* Spa Chatbot */}

        <script>
          {`
(function(){
  // Spa Chatbot Widget Loader
  const spaId = "271";
  const script = document.createElement('script');
  script.src = 'https://chatbot.bookingbot.in//bot.js?spa=' + spaId;
  script.async = true;
  script.setAttribute('data-spa', spaId);
  document.head.appendChild(script);
})();`}
</script>

      </body>
    </html>
  );
}