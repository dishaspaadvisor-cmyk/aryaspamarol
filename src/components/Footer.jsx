"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const footerData = {
  cta: {
    title: "Relax. Refresh. Rejuvenate.",
    description:
      "Experience premium wellness therapies with our professional therapists. Book your appointment today.",
    phone: "+918976804170",
    whatsapp: "919876543210",
  },

  company: {
    logo: "/logo/Arya Spa Favbar..png",
    tagline: "Luxury Spa & Wellness Center",
    description:
      "Experience premium spa therapies, authentic Thai massage, aromatherapy, deep tissue massage, and luxury wellness treatments in a peaceful environment.",
  },

  quickLinks: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Gallery", href: "/gallery" },
    { title: "Contact", href: "/contact" },
  ],

  services: [
    "Swedish Massage",
    "Thai Massage",
    "Deep Tissue Massage",
    "Aromatherapy Massage",
    "Couple Massage",
    "Body Scrub",
  ],

  contact: {
    phone: "+918976804170",
    whatsapp: "919876543210",
    email: "aryaspa.marol@gmail.com",
    address: "Unit/Gala C-1, Hind Saurashira Industrial Estate, Marol Naka, Andheri East, Mumbai - 400059, Maharashtra",
  },

  social: [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61579619467260",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/aryaspamarol01/",
    },
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@AryaSpaMarol",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/918976804170",
    },
  ],

  bottomLinks: [
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
    {
      title: "Terms & Conditions",
      href: "/privacy-policy",
    },
 
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white text-black">
      {/* CTA */}


      {/* Footer */}
      <div className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

        {/* Company */}
        <div>
          <Image
            src={footerData.company.logo}
            width={180}
            height={20}
            alt="Logo"
          />

          <h3 className="text-2xl font-bold mt-5">
            {footerData.company.tagline}
          </h3>

          <p className="mt-4 text-gray-400 leading-7">
            {footerData.company.description}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Quick Links
          </h3>

          {footerData.quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="block mb-3 hover:text-amber-500 duration-300"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Our Services
          </h3>

          {footerData.services.map((service) => (
            <p
              key={service}
              className="mb-3 text-gray-400"
            >
              {service}
            </p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6">
            Contact Us
          </h3>

          <div className="flex items-center gap-3 mb-4">
            <Phone size={18} />
            <span>{footerData.contact.phone}</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Mail size={18} />
            <span>{footerData.contact.email}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={60} />
            <span>{footerData.contact.address}</span>
          </div>

          <div className="flex gap-4 mt-8">
            {footerData.social.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-amber-200 hover:bg-[#7514AD] hover:text-black flex items-center justify-center duration-300"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Arya Spa. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            {footerData.bottomLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="hover:text-amber-500 duration-300"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}