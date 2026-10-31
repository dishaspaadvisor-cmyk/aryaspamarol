import Image from "next/image";
import Link from "next/link";

export default function GallerySection({ gallery }) {
  return (
    <section className="py-30 bg-[#faf8f2]">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="uppercase tracking-[5px] text-[#7514ad] font-medium">
            Gallery
          </span>

          <h1 className="text-5xl md:text-6xl text-[#7514ad] font-serif mt-4">
            Take A Look Around
          </h1>

          <p className="text-gray-600 mt-6 leading-8">
            Browse our luxury spa interiors, elegant treatment
            rooms, wellness therapies, and premium massage
            experiences designed for complete relaxation.
          </p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <Link
              key={item.id}
              href={item.image}
              target=""
              className="group overflow-hidden rounded-[30px] bg-white shadow-lg block"
            >
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  title={item.seo}
                  fill
                  priority={item.id <= 3}
                  sizes="(max-width:768px)50vw,(max-width:1024px)33vw,33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                  <span className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold opacity-0 transition duration-300 group-hover:opacity-100">
                    View Image
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}