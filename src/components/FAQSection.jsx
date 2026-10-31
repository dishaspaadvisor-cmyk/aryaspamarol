"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Faq } from "@/data/siteData";

export default function FAQPage() {
  const [open, setOpen] = useState(0);

  return (
    <main className="bg-[#faf9f6] py-24">

      <div className="max-w-4xl mx-auto px-5">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="uppercase tracking-[5px] text-[#7514ad] font-semibold">
            FAQ'S
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl text-[#7514ad] font-bold leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-8">
            Find answers to the most common questions about Arya Spa,
            our massage therapies, wellness treatments, appointments,
            and luxury spa services.
          </p>

        </div>

        {/* FAQ Accordion */}

        <div className="space-y-6">

          {Faq.faqs.map((faq, index) => {

            const active = open === index;

            return (

              <div
                key={faq.id}
                className={`rounded-3xl border-[#7514ad] overflow-hidden transition-all duration-300 ${
                  active
                    ? "border-amber-500 bg-amber-50 shadow-xl"
                    : "border-gray-200 bg-white"
                }`}
              >

                <button
                  onClick={() => setOpen(active ? -1 : index)}
                  className="w-full flex justify-between items-center px-8 py-6 text-left"
                >

                  <h2 className="text-lg md:text-xl text-[#7514ad] font-semibold">
                    {faq.question}
                  </h2>

                  {active ? (
                    <ChevronUp
                      size={22}
                      className="text-amber-600 flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={22}
                      className="text-gray-500 flex-shrink-0"
                    />
                  )}

                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    active
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 text-gray-600 leading-8">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </main>
  );
}
