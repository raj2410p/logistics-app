import React from "react";

const BrandPartners = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Our Trusted Brand Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {/* Partner 1 */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="./src/assets/dhl.svg"
              alt="DHL"
              className="h-16 w-16 object-contain"
            />
            <p className="text-sm font-medium text-gray-600">DHL</p>
          </div>
          {/* Partner 2 */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="./src/assets/fedex.svg"
              alt="FedEx"
              className="h-16 w-16 object-contain"
            />
            <p className="text-sm font-medium text-gray-600">FedEx</p>
          </div>
          {/* Partner 3 */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="./src/assets/glassdoor.svg"
              alt="UPS"
              className="h-16 w-16 object-contain"
            />
            <p className="text-sm font-medium text-gray-600">Glass Door</p>
          </div>
          {/* Partner 4 */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="./src/assets/aurawood.jpg"
              alt="Blue Dart"
              className="h-16 w-16 object-contain"
            />
            <p className="text-sm font-medium text-gray-600">Aura Wood</p>
          </div>
          {/* Partner 5 */}
          <div className="flex flex-col items-center space-y-3">
            <img
              src="./src/assets/amazon.svg"
              alt="Amazon Logistics"
              className="h-16 w-16 object-contain"
            />
            <p className="text-sm font-medium text-gray-600">
              Amazon Logistics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
