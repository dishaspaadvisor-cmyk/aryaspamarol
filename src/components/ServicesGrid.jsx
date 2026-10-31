import Image from "next/image";
import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { siteData } from "@/data/siteData";

export default function ServicesGrid({ data }) {
  return (
    <section className="py-0 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="mb-16 flex flex-col lg:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-amber-600 uppercase tracking-[4px] font-medium">
              {data.badge}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              {data.title}
            </h2>

            <p className="mt-5 text-gray-600 max-w-xl leading-8">
              {data.description}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-2 text-center ">
          <span className="inline-block text-center uppercase tracking-[5px] text-[#7514AD]  font-semibold">
            Our Services
          </span>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {data.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[28px] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 duration-300"
            >
              {/* Header */}
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-[#7514ad]">
                      {service.title}
                    </h3>

                    <p className="text-gray-500 mt-2">
                      {service.duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-[300px] mx-5 rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                  className="object-cover object-top hover:scale-110 duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 leading-8">
                  {service.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-8">
                  <Link
                    href={`tel:${siteData.contact.phone}`}
                    className="flex-1 bg-[#7514ad] hover:bg-amber-600 text-white py-3 rounded-full flex items-center justify-center gap-2 transition"
                  >
                    <Phone size={18} />
                    Call Now
                  </Link>

                  <Link
                    href={`https://wa.me/${siteData.contact.whatsapp}`}
                    target="_blank"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full flex items-center justify-center gap-2 transition"
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