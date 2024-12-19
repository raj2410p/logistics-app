import React from 'react';

interface Review {
  name: string;
  comment: string;
  rating: number;
  date: string;
}

const CustomerRating: React.FC = () => {
  const reviews: Review[] = [
    {
      name: "John Doe",
      comment: "Swiftly has transformed our logistics operations. Fast and reliable!",
      rating: 5,
      date: "Dec 12, 2024",
    },
    {
      name: "Jane Smith",
      comment: "Excellent service and real-time tracking! Highly recommended.",
      rating: 4,
      date: "Nov 30, 2024",
    },
    {
      name: "Robert Johnson",
      comment: "Affordable and efficient, but the customer service could improve.",
      rating: 3,
      date: "Nov 15, 2024",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>
      ));
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          What Our Customers Say !!
        </h2>
        <div className="space-y-6 grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-2">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6"
            >
              <div className="flex-shrink-0">
                <div className="h-16 w-16 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-800 font-bold">
                  {review.name[0]}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.date}</p>
                <div className="mt-2">{renderStars(review.rating)}</div>
                <p className="mt-4 text-gray-700">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerRating;
