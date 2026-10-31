"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const heroContent = [
  {
    title: "No 1 Spa in Marol, Andheri East",
    description:
      "Experience premium spa therapies with expert therapists in a luxurious and relaxing environment.",
  },
  {
    title: "Best Spa Services Available",
    description:
      "Choose from Swedish Massage, Deep Tissue, Aroma Therapy, Balinese Massage, Thai Massage, and more.",
  },
  {
    title: "Expert Staff Available",
    description:
      "Our professional therapists ensure a rejuvenating and refreshing spa experience every time you visit.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[92vh] overflow-hidden">
      {/* Desktop Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      >
        <source src="/video/Untitled design.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Mobile Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      >
        <source src="/video/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>



      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
          <div className="max-w-3xl">
            <div key={current} className="animate-fade-in">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                {heroContent[current].title}
              </h1>

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              {/* Call Button */}
              <Link
                href="tel:+918976804170"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#7514ad] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#5e108a]"
              >
                <Phone size={20} />
                Call Now
              </Link>

              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/918976804166"
                target="_blank"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fb95b]"
              >
                <FaWhatsapp size={20} />
                WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}