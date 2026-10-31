import Image from "next/image";
import {
  Leaf,
  Sparkles,
  BadgeCheck,
  HeartHandshake,
} from "lucide-react";

const stats = [
  {
    number: "12K+",
    title: "Happy Clients",
    desc: "Luxury spa experiences delivered.",
  },
  {
    number: "98%",
    title: "Customer Satisfaction",
    desc: "Trusted by thousands of clients.",
  },
  {
    number: "25+",
    title: "Expert Therapists",
    desc: "Certified wellness professionals.",
  },
  {
    number: "8+",
    title: "Years Experience",
    desc: "Delivering premium spa treatments.",
  },
];

const features = [
  {
    icon: Leaf,
    title: "Natural Essential Oils",
  },
  {
    icon: Sparkles,
    title: "Luxury Private Rooms",
  },
  {
    icon: BadgeCheck,
    title: "Certified Therapists",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Treatments",
  },
];

export default function AboutSection() {
  return (
    <section className="bg-[#faf9f6] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 lg:mb-24">

          <div className="lg:col-span-3 text-center lg:text-left">
            <h4 className="font-serif text-[#7514ad] text-3xl md:text-4xl">
              About Arya Spa
            </h4>

            <p className="mt-2 text-gray-500">
              Luxury Wellness
            </p>
          </div>

          <div className="lg:col-span-9">
            <p className="text-base md:text-lg leading-8 text-gray-600 max-w-4xl mx-auto lg:mx-0">
              Arya Spa is your destination for luxurious body massages,
              aroma therapy, deep tissue massage, couple spa, and wellness
              treatments delivered by certified therapists in elegant
              private rooms.
            </p>
          </div>

        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 lg:mb-24">

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-3xl shadow-xl h-[280px] sm:h-[380px] md:h-[500px] lg:h-[650px]">

            <Image
              src="/services/12.png"
              alt="Arya Spa"
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 80vw, 50vw"
              className="object-cover transition duration-500 hover:scale-105"
            />

          </div>

          {/* Content */}
          <div>

            <span className="uppercase tracking-[4px] md:tracking-[6px] text-black font-medium text-sm">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7514ad] leading-tight">
              Luxury Spa & Wellness Experience
              <br className="hidden lg:block" />
              in Marol Naka, Andheri East
            </h2>

            <p className="mt-6 text-base md:text-lg leading-8 text-gray-600">
              At <strong>Arya Spa</strong>, we believe true wellness begins
              with complete relaxation of the mind and body. Located in
              <strong> Marol Naka, Andheri East, Mumbai</strong>, we provide
              premium <strong>Body Massage</strong>,
              <strong> Thai Massage</strong>,
              <strong> Deep Tissue Massage</strong>,
              <strong> Swedish Massage</strong>,
              <strong> Aroma Therapy</strong>, and
              <strong> Couple Spa Treatments</strong> in a luxurious and
              peaceful environment.
            </p>

            <p className="mt-5 text-base md:text-lg leading-8 text-gray-600">
              Our certified therapists combine traditional healing techniques
              with modern wellness therapies to create a personalized spa
              experience for every guest. Using premium essential oils,
              soothing aromas, and professional massage techniques, we help
              reduce stress, relieve muscle tension, improve blood circulation,
              and restore your overall well-being.
            </p>



          </div>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

          {stats.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-5 md:p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#7514ad] hover:shadow-2xl"
            >

              <div className="mx-auto mb-4 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-[#7514ad]/10 transition-all duration-300 group-hover:bg-[#7514ad]">

                <span className="text-2xl md:text-3xl font-bold text-[#7514ad] group-hover:text-white">
                  {item.number}
                </span>

              </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}