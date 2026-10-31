"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactCard() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        notes: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await fetch(
                "https://apibackend.mastercall.in/api/v1/web-leads/submit/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        form_key: "frm_aryaspamarol_227362",
                        name: formData.name,
                        phone: formData.phone,
                        address: formData.address,
                        notes: formData.notes,
                        submitted_from_url: window.location.href,
                    }),
                }
            );

            const data = await response.json();

            if (response.ok) {
                alert("Message sent successfully!");

                setFormData({
                    name: "",
                    phone: "",
                    address: "",
                    notes: "",
                });
            } else {
                alert(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to submit form.");
        }

        setLoading(false);
    };

    return (
        <>
            {/* Form + Map */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <span className="inline-block uppercase tracking-[5px] text-[#7514AD] text-sm font-semibold">
                        Contact us
                    </span>
                </div>
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-[#f5ece7] rounded-3xl shadow-xl p-8">
                        <h2 className="text-3xl font-bold text-[#7514ad] mb-8">
                            Send us a Message
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-5 py-4 text-[#7514ad] outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-5 py-4 text-[#7514ad]  outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full border rounded-xl px-5 py-4 text-[#7514ad] outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                            />

                            <textarea
                                rows={5}
                                name="notes"
                                placeholder="Your Message"
                                value={formData.notes}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-5 py-4 text-[#7514ad]  outline-none focus:ring-2 focus:ring-[#8B5A2B]"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#7514ad] hover:bg-black transition text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-60"
                            >
                                {loading ? "Sending..." : "Book Now"}
                            </button>
                        </form>
                    </div>

                    {/* Google Map */}
                    <div className="rounded-3xl overflow-hidden shadow-xl min-h-[650px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.295508066696!2d72.87905557520618!3d19.106683882104164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9476050868d%3A0xbedb75cf078c0bd0!2sArya%20Spa%20-%20Spa%20in%20Marol%2C%20Andheri%20East!5e1!3m2!1sen!2sin!4v1784789653584!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            className="border-0 w-full h-full"
                        />
                    </div>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="pb-10 px-6">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">

                        {/* Address */}
                        <div className="bg-white rounded-2xl shadow-md p-5 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#8B5A2B] flex items-center justify-center text-white">
                                <MapPin size={22} />
                            </div>

                            <h3 className="text-lg font-semibold text-black mb-2">
                                Address
                            </h3>

                            <p className="text-sm text-gray-600 leading-6">
                                Unit/Gala C-1, Hind Saurashira Industrial Estate, Marol Naka, Andheri East, Mumbai - 400059, Maharashtra
                            </p>

                        </div>

                        {/* Phone */}
                        <div className="bg-white rounded-2xl shadow-md p-5 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-600 flex items-center justify-center text-white">
                                <Phone size={22} />
                            </div>

                            <h3 className="text-lg font-semibold text-black mb-2">
                                Phone
                            </h3>

                            <a
                                href="tel:+919766660872"
                                className="block text-sm text-gray-600 hover:text-[#7514ad]"
                            >
                                +918976804170
                            </a>

                            <a
                                href="https://wa.me/918976804166"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-3 inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-600 hover:text-white transition"
                            >
                                <FaWhatsapp size={16} />
                                WhatsApp
                            </a>

                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-2xl shadow-md p-5  text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                <Mail size={22} />
                            </div>

                            <h3 className="text-lg font-semibold text-black mb-2">
                                Email
                            </h3>

                            <a
                                href="mailto: aryaspa.marol@gmail.com"
                                className=" text-gray-600 hover:text-[#7514ad]"
                            >
                                aryaspa.marol@gmail.com
                            </a>

                        </div>

                        {/* Opening Hours */}
                        <div className="bg-white rounded-2xl shadow-md p-5 text-center border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

                            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-600 flex items-center justify-center text-white">
                                <Clock size={22} />
                            </div>

                            <h3 className="text-lg font-semibold text-black mb-2">
                                Hours
                            </h3>

                            <p className="text-sm text-gray-600">
                                Monday - Sunday
                            </p>

                            <p className="mt-2 text-sm font-semibold text-black">
                                10:00 AM - 11:00 PM
                            </p>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}