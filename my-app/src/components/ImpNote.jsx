import React from 'react';

const ImpNote = () => {
  return (
    <div className="bg-gray-200 px-6 py-24">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-start gap-14 md:gap-28 text-black">
        
        {/* Card 1 */}
        <div className="flex items-start gap-5 max-w-xs">
          <img src="/icon-earth.png" alt="logo" className="w-14 h-14" />
          <div>
            <h1 className="text-3xl font-bold text-pretty">700 Destinations</h1>
            <p className="mt-3 text-base text-gray-600">
              Our expert team handpicked all <br /> destinations in this site
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start gap-5 max-w-xs">
          <img src="/logo-02.png" alt="logo" className="w-14 h-14" />
          <div>
            <h1 className="text-3xl font-bold text-pretty">Best Price Guarantee</h1>
            <p className="mt-3 text-base text-gray-600">
              Price match within 48 hours of <br /> order confirmation
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-start gap-5 max-w-xs">
          <img src="/logo-03.png" alt="logo" className="w-14 h-14" />
          <div>
            <h1 className="text-3xl font-bold text-pretty">Top Notch Support</h1>
            <p className="mt-3 text-base text-gray-600">
              We are here to help, before, during, <br /> and even after your trip.
            </p>
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default ImpNote;
