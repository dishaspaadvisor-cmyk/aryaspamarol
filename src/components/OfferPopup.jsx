"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Phone, Clock3, Sparkles, Tag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

const PHONE = "918976804170";

export default function OfferPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180);

  // Open popup after 25 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  // Countdown while popup is open
  useEffect(() => {
    if (!showPopup || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [showPopup, timeLeft]);

  // Close popup with Escape key
  useEffect(() => {
    if (!showPopup) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowPopup(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [showPopup]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;

  const whatsappLink = (message) =>
    `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;

  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/65 p-3 backdrop-blur-[5px] sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          setShowPopup(false);
        }
      }}
    >
      {/* Main Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="spa-offer-title"
        className="relative my-auto w-full max-w-[460px] overflow-hidden rounded-[24px] bg-[#FFFCF7] shadow-[0_25px_90px_rgba(0,0,0,0.3)] animate-[popupIn_0.4s_ease-out] sm:rounded-[28px]"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => setShowPopup(false)}
          aria-label="Close offer popup"
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#493225] shadow-lg transition hover:scale-110 hover:text-red-600"
        >
          <X size={21} />
        </button>

        {/* Image Section */}
        <div className="relative h-[155px] overflow-hidden sm:h-[190px]">
          <Image
            src="/offer/offers-bg.avif"
            alt="Luxury spa massage experience"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 460px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#321C12]/75 via-transparent to-transparent" />

          <div className="absolute bottom-4 left-5 text-white">
            <div className="mb-1 flex items-center gap-2">
              <Sparkles size={15} className="text-[#F5D49D]" />
              <span className="text-[10px] font-semibold uppercase tracking-[3px] text-[#F5D49D]">
                Exclusive Spa Offers
              </span>
            </div>

            <h2
              id="spa-offer-title"
              className="font-serif text-[27px] font-semibold leading-tight sm:text-[32px]"
            >
              Relax. Refresh. Rejuvenate.
            </h2>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6">
          <div className="mb-4 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[3px] text-[#AD8454]">
              A Little Luxury, Just For You
            </p>

            <h3 className="mt-1 font-serif text-[25px] font-bold text-[#51382A]">
              Choose Your Special Offer
            </h3>
          </div>

  

          {/* OFFER CARD 2 */}
          <div className="relative mb-4 overflow-hidden rounded-2xl border border-[#E6C9C5] bg-gradient-to-r from-[#FFF0ED] to-[#FFF9F7] p-4 shadow-sm">
            <div className="absolute -right-8 -bottom-10 h-28 w-28 rounded-full bg-[#E9B5AA]/20" />

            <div className="relative flex items-center justify-between gap-3">
              <div>
                <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-[#C36558]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#BA594C]">
                  <Sparkles size={12} />
                  Special Spa Package
                </div>

                <p className="text-[12px] font-medium text-[#77574F]">
                  Relaxation Package
                </p>

                <div className="mt-1 flex items-baseline gap-1">
                  <span className="text-[12px] font-semibold text-[#8E675F]">
                    From
                  </span>

                  <span className="text-[35px] font-extrabold leading-none text-[#C45D4F]">
                    ₹1,999
                  </span>
                </div>

                <p className="mt-2 text-xs text-[#8B6D66]">
                  Your relaxation starts here.
                </p>
              </div>

              <a
                href={whatsappLink(
                  "Hello, I am interested in the Spa Package starting at Rs. 1,999. Please share details."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex shrink-0 items-center gap-1.5 rounded-xl bg-[#C36558] px-3 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#A84E43]"
              >
                <FaWhatsapp size={17} />
                Book Now
              </a>
            </div>
          </div>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-2 rounded-xl border border-[#EBDCC8] bg-[#F9F1E6] px-3 py-3">
            <Clock3 size={17} className="text-[#A47743]" />

            <span className="text-xs font-medium text-[#725944]">
              {timeLeft > 0
                ? "Booking popup closes in"
                : "Countdown finished"}
            </span>

            <span
              aria-live="off"
              className="rounded-md bg-[#6A4830] px-2.5 py-1 font-mono text-sm font-bold text-white"
            >
              {formattedTime}
            </span>
          </div>

          {/* Contact Buttons */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={`tel:+${PHONE}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#300630] py-3.5 text-[13px] font-semibold text-white transition hover:bg-[#533524]"
            >
              <Phone size={17} />
              Call Now
            </a>

            <a
              href={whatsappLink(
                "Hello, I would like to know more about your spa offers."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#1FA855] py-3.5 text-[13px] font-semibold text-white transition hover:bg-[#168844]"
            >
              <FaWhatsapp size={19} />
              WhatsApp
            </a>
          </div>

          <p className="mt-3 text-center text-[10px] text-[#9B8878]">
            *Offers are subject to availability and applicable terms.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes popupIn {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}