
// import React from 'react';

// const Destination = () => {
//   return (
//     <div className="bg-slate-200 px-4 py-16">
//       {/* Heading Section */}
//       <div className="text-center mb-6">
//         <h1 className="text-3xl md:text-5xl font-bold text-black mt-6">
//           Top <span className="text-blue-400">Destination</span>
//         </h1>
//         <p className="mt-4 text-gray-700 text-sm md:text-base">
//           Explore our top destinations voted by more than 100,000+ <br className="hidden sm:block" />
//           customers around the world.
//         </p>
//         <div className="mt-6 text-blue-600 text-lg underline underline-offset-4 decoration-2 font-semibold hover:text-blue-700 transition">
//           <a href="/view-all-destination">All Destinations →</a>
//         </div>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         {[
//           {
//             img: '/Travel2.jpg',
//             title: 'Paris',
//             desc: 'The city of lights and love.',
//           },
//           {
//             img: '/Travel3.jpg',
//             title: 'Mountains',
//             desc: 'Peaceful and breathtaking heights.',
//           },
//           {
//             img: '/Travel4.jpg',
//             title: 'Beach',
//             desc: 'Relax with the sound of waves.',
//           },
//           {
//             img: '/Travel5.jpg',
//             title: 'Desert',
//             desc: 'Golden sands and magical sunsets.',
//           },
//           {
//             img: '/Travel6.jpg',
//             title: 'Forest',
//             desc: 'Explore green serenity and wildlife.',
//           },
//           {
//             img: '/Travel1.jpg',
//             title: 'City Life',
//             desc: 'Modern lifestyle and night lights.',
//           },
//         ].map((card, i) => (
//           <div
//             key={i}
//             className="relative group rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
//           >
//             <img
//               src={card.img}
//               alt={card.title}
//               className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white px-4 text-center">
//               <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
//               <p className="text-sm">{card.desc}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Destination;



import React from 'react';
import { Link } from 'react-router-dom';

const Destination = () => {
  return (
    <div className="bg-slate-200 px-4 py-16">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-black mt-6">
          Top <span className="text-blue-400">Destination</span>
        </h1>
        <p className="mt-4 text-gray-700 text-sm md:text-base">
          Explore our top destinations voted by more than 100,000+ <br className="hidden sm:block" />
          customers around the world.
        </p>
        <div className="mt-6 text-blue-600 text-lg underline underline-offset-4 decoration-2 font-semibold hover:text-blue-700 transition">
          <Link to="/view-all-destination">All Destinations →</Link>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {[
          {
            img: '/Travel2.jpg',
            title: 'Paris',
            desc: 'The city of lights and love.',
          },
          {
            img: '/Travel3.jpg',
            title: 'Mountains',
            desc: 'Peaceful and breathtaking heights.',
          },
          {
            img: '/Travel4.jpg',
            title: 'Beach',
            desc: 'Relax with the sound of waves.',
          },
          {
            img: '/Travel5.jpg',
            title: 'Desert',
            desc: 'Golden sands and magical sunsets.',
          },
          {
            img: '/Travel6.jpg',
            title: 'Forest',
            desc: 'Explore green serenity and wildlife.',
          },
          {
            img: '/Travel1.jpg',
            title: 'City Life',
            desc: 'Modern lifestyle and night lights.',
          },
        ].map((card, i) => (
          <div
            key={i}
            className="relative group rounded-xl overflow-hidden shadow-lg transition-transform duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white px-4 text-center">
              <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
              <p className="text-sm">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
