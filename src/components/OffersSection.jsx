"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function OffersSection({ data }) {
  return (
    <section className=" bg-[#F8F6FC]">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block uppercase tracking-[5px] text-[#7514AD] text-sm font-semibold">
            Special Offers
          </span>
        </div>

        {/* Offer Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {data.offers.map((offer) => (
            <div
              key={offer.id}
              className="group overflow-hidden rounded-[32px] bg-white shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-500"
            >

              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">

                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
              

                  <p className="text-white/90 mt-2">
                    {offer.duration}
                  </p>
                </div>

              </div>

              {/* Content */}
              <div className="p-0">

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-8">

                  <Link
                    href={`tel:${data.contact.phone}`}
                    className="flex items-center justify-center gap-2 rounded-full bg-[#7514AD] py-3 font-semibold text-white transition hover:bg-[#5E1191]"
                  >
                    <FaPhoneAlt />
                    Call
                  </Link>

                  <Link
                    href={`https://wa.me/${data.contact.whatsapp}`}
                    target="_blank"
                    className="flex items-center justify-center gap-2 rounded-full bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
                  >
                    <FaWhatsapp size={18} />
                    WhatsApp
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}