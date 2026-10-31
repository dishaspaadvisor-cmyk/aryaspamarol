"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteData } from "@/data/siteData";

export default function FloatingButtons() {
  return (
    <>
      <div className="fixed bottom-6 right-5 z-[9999] flex flex-col gap-4">

        {/* WhatsApp */}
        <Link
          href={`https://wa.me/${siteData.contact.whatsapp}`}
          target="_blank"
          aria-label="WhatsApp"
          className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 animate-bounce-slow"
        >
          <FaWhatsapp className="text-3xl animate-shake" />
        </Link>

        {/* Call */}
        <Link
          href={`tel:${siteData.contact.phone}`}
          aria-label="Call Now"
          className="group flex h-16 w-16 items-center justify-center rounded-full bg-[#7514ad] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-purple-500/50 animate-bounce-slow"
        >
          <Phone className="h-8 w-8 animate-shake" />
        </Link>

      </div>
    </>
  );
}