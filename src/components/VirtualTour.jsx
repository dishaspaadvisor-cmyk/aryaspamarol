"use client";

export default function VirtualTour() {
  return (
    <section className="w-full bg-[#f8f5f1] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[3px] text-[#7514AD]">
            Explore Arya Spa
          </span>

          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
            Take a Virtual Tour
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
            Step inside Arya Spa Marol and explore our relaxing wellness
            environment through our immersive virtual tour.
          </p>
        </div>

        {/* Virtual Tour */}
        <div className="relative overflow-hidden rounded-2xl bg-black shadow-2xl">
          <div className="aspect-[16/9] w-full">
            <iframe
              src="https://tour.panoee.net/69ccae0f06ad10d186b88865"
              title="Arya Spa Marol Virtual Tour"
              className="h-full w-full border-0"
              allow="fullscreen; xr-spatial-tracking"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}