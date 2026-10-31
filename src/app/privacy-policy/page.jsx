export const metadata = {
  title: "Privacy Policy & Terms & Conditions | Arya Spa",
  description:
    "Read the Privacy Policy and Terms & Conditions of Arya Spa, Marol Naka, Andheri East, Mumbai.",
};

export default function PrivacyTermsPage() {
  return (
    <section className="bg-[#faf9f6] py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[5px] text-[#7514ad]">
            Legal Information
          </span>

          <h1 className="mt-4 text-4xl font-bold text-[#7514ad] md:text-5xl">
            Privacy Policy & Terms
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-gray-600">
            Please read our Privacy Policy and Terms & Conditions before
            using our website or booking spa services.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Privacy Policy */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-3xl font-bold text-[#7514ad]">
              Privacy Policy
            </h2>

            <div className="space-y-6 text-gray-700 leading-8">

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Information We Collect
                </h3>
                <p>
                  We collect basic information such as your name, phone
                  number, email address, and appointment details when you
                  contact or book our spa services.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  How We Use Your Information
                </h3>
                <p>
                  Your information is used only for appointment booking,
                  customer support, promotional offers, and improving our
                  spa services.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Data Protection
                </h3>
                <p>
                  We keep your personal information secure and do not sell,
                  rent, or share your information with third parties except
                  when required by law.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Cookies
                </h3>
                <p>
                  Our website may use cookies to improve user experience
                  and website performance.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Contact
                </h3>
                <p>
                  If you have any questions regarding our Privacy Policy,
                  please contact Arya Spa directly.
                </p>
              </div>

            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-3xl font-bold text-[#7514ad]">
              Terms & Conditions
            </h2>

            <div className="space-y-6 text-gray-700 leading-8">

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Appointments
                </h3>
                <p>
                  All appointments are subject to availability and
                  confirmation by Arya Spa.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Cancellation Policy
                </h3>
                <p>
                  Please inform us in advance if you need to cancel or
                  reschedule your appointment.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Payments
                </h3>
                <p>
                  Payment for spa services must be completed according to
                  the pricing displayed or confirmed during booking.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Service Availability
                </h3>
                <p>
                  Spa services, offers, and pricing may change without
                  prior notice.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Liability
                </h3>
                <p>
                  Arya Spa is not responsible for any loss or damage caused
                  by misuse of the website or failure to disclose relevant
                  health information before treatment.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold text-black">
                  Acceptance
                </h3>
                <p>
                  By using this website or booking our services, you agree
                  to these Terms & Conditions.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}