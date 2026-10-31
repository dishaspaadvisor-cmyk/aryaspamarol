"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Offers", href: "/offers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Close menu when pressing Escape
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <header className="fixed top-0 left-0 right-0 z-[9999] px-3 pt-4 sm:px-5">
        <nav
          className="
            mx-auto
            flex
            h-[64px]
            w-full
            max-w-7xl
            items-center
            justify-between
            rounded-full
            border
            border-black/10
            bg-white/95
            px-4
            shadow-[0_8px_30px_rgba(0,0,0,0.10)]
            backdrop-blur-xl
            sm:h-[72px]
            sm:px-6
          "
        >
          {/* =================================================
              LOGO
          ================================================= */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex shrink-0 items-center"
          >
            <Image
              src="/logo/Arya Spa Favbar..png"
              alt="Arya Spa"
              width={160}
              height={80}
              priority
              className="
                h-9
                w-auto
                object-contain
                sm:h-10
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      relative
                      text-[15px]
                      font-medium
                      text-gray-800
                      transition-colors
                      duration-300
                      hover:text-[#7514AD]
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Book Button */}
            <Link
              href="/contact"
              className="
                flex
                items-center
                gap-2
                rounded-full
                bg-[#7514AD]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-[#5F0F8C]
                hover:shadow-lg
                hover:-translate-y-0.5
              "
            >
              <PhoneCall size={17} strokeWidth={2} />
              Book Now
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#7514AD]
              text-white
              shadow-md
              transition-all
              duration-300
              hover:bg-[#5F0F8C]
              active:scale-95
              lg:hidden
            "
          >
            {isOpen ? (
              <X size={23} strokeWidth={2} />
            ) : (
              <Menu size={23} strokeWidth={2} />
            )}
          </button>
        </nav>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      <div
        onClick={closeMenu}
        className={`
          fixed
          inset-0
          z-[9997]
          bg-black/30
          backdrop-blur-[3px]
          transition-all
          duration-300
          lg:hidden
          ${
            isOpen
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
          }
        `}
      />

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}
      <div
        className={`
          fixed
          left-3
          right-3
          top-[88px]
          z-[9998]
          lg:hidden
          transition-all
          duration-300
          ease-out
          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-5 opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className="
            overflow-hidden
            rounded-[26px]
            border
            border-black/10
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.18)]
          "
        >
          {/* Menu Header */}
          <div
            className="
              flex
              items-center
              justify-between
              border-b
              border-gray-100
              px-5
              py-4
            "
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#7514AD]">
                Arya Spa
              </p>

              <p className="mt-1 text-sm font-medium text-gray-500">
                Explore our wellness experience
              </p>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-gray-700
                transition
                hover:bg-[#7514AD]
                hover:text-white
              "
              aria-label="Close menu"
            >
              <X size={19} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-3 py-3">
            <ul>
              {navLinks.map((item, index) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-2xl
                      px-4
                      py-3.5
                      text-[15px]
                      font-medium
                      text-gray-800
                      transition-all
                      duration-200
                      hover:bg-[#7514AD]/10
                      hover:text-[#7514AD]
                    "
                  >
                    <span>{item.name}</span>

                    <ChevronRight
                      size={18}
                      className="
                        text-gray-300
                        transition-all
                        duration-200
                        group-hover:translate-x-1
                        group-hover:text-[#7514AD]
                      "
                    />
                  </Link>

                  {index !== navLinks.length - 1 && (
                    <div className="mx-4 border-b border-gray-100" />
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-gray-100 bg-gray-50/70 p-4">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-full
                bg-[#7514AD]
                px-6
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-[#5F0F8C]
                hover:shadow-lg
              "
            >
              <PhoneCall size={18} />
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}