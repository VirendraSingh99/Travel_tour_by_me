import React from "react";

const PopularTour = () => {
  return (
    <div className="bg-slate-200 w-full">
      <div>
        <h1 className="text-black text-center py-10 text-3xl sm:text-4xl font-bold">
          Popular <span className="text-blue-400">Tours</span>
        </h1>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 md:px-16 py-10">
        {[
          {
            img: "/TravelTour2.jpg",
            title: "Austria – 6 Days in Vienna, Hallstatt",
            duration: "2 Days 1 Night",
            rating: "★★★★★",
            reviews: "(1 Review)",
            oldPrice: "$2,600",
            newPrice: "$2,100",
          },
          {
            img: "/TravelTour4.jpg",
            title: "France – 4 Days in Paris",
            duration: "1 Day 2 Nights",
            rating: "★★★★☆",
            reviews: "(3 Reviews)",
            oldPrice: "$1,800",
            newPrice: "$1,400",
          },
          {
            img: "/TravelTour3.jpg",
            title: "Maldives – 5 Days Beach Tour",
            duration: "3 Days 2 Nights",
            rating: "★★★★★",
            reviews: "(5 Reviews)",
            oldPrice: "$3,000",
            newPrice: "$2,450",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="relative w-full bg-white rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-[24rem] sm:h-[28rem] md:h-[32rem] lg:h-[36rem] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            <div className="absolute top-4 right-4 z-20">
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                Special Offer
              </span>
            </div>
            <div className="absolute bottom-36 px-6 z-20 text-white">
              <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                {card.title}
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 right-0 text-white p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10 bg-black/50">
              <p className="text-sm mb-2">{card.duration}</p>
              <div className="flex items-center gap-2 text-sm mb-2">
                <span className="text-yellow-400">{card.rating}</span>
                <span className="text-xs text-white">{card.reviews}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="line-through text-gray-300">
                  {card.oldPrice}
                </span>
                <span className="text-lg font-semibold text-green-300">
                  {card.newPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularTour;
