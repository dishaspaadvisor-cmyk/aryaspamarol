import Image from "next/image";
export default function GoogleReviews({
  title,
  rating,
  totalReviews,
  reviewLink,
  reviews,
}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
          <div>
            <h2 className="text-3xl md:text-4xl  text-[#666666] text-center font-bold">Customer Testimonials on Google</h2>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-500 text-xl">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-600">
                {rating} rating of {totalReviews} reviews
              </span>
            </div>
          </div>


        </div>

        {/* Review Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition"
            >
              <div className="flex justify-between items-start">
                <div className="flex gap-3">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={55}
                    height={55}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-black">{review.name}</h3>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                <Image
                  src="/logo/channels4_profile.jpg"
                  alt="Google"
                  width={40}
                  height={40}
                />
              </div>

              <div className="mt-4 text-yellow-500">
                {"⭐".repeat(review.rating)}
              </div>

              <p className="mt-4 text-gray-600 line-clamp-4">
                {review.review}
              </p>

 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}