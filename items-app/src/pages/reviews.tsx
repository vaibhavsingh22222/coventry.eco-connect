import React from "react";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Alice",
      rating: 5,
      comment: "Amazing eco-friendly platform! Very useful for finding local businesses.",
    },
    {
      id: 2,
      name: "John",
      rating: 4,
      comment: "Great UI and easy to navigate. Loved the idea!",
    },
    {
      id: 3,
      name: "Emma",
      rating: 5,
      comment: "Helped me find repair cafes near me. Super helpful!",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16">

      <h1 className="text-4xl font-bold text-center mb-10 text-slate-900">
        Reviews ⭐
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-slate-100 p-6 rounded-xl shadow hover:shadow-lg transition"
          >

            <h2 className="text-lg font-bold text-green-600">
              {review.name}
            </h2>

            <p className="text-yellow-500 mt-1">
              {"⭐".repeat(review.rating)}
            </p>

            <p className="text-slate-600 mt-3 leading-relaxed">
              {review.comment}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}