import './Landing.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import CustomerRating from "./CustomerReviews";
import BrandPartners from "./BrandPartner";
import { useState } from 'react';

const LandingPage = () => {

  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-gray-800">
        <img src='./src/assets/logo.png' alt="Swiftly Logo" className="w-24" />
        <ul className="hidden mb-0 md:flex space-x-6 text-base">
          <li><a href="#home" className="px-2 py-2 text-indigo-400 hover:text-indigo-600 no-underline">Home</a></li>
          <li><a href="#about" className="px-2 py-2 text-indigo-400 hover:text-indigo-600 no-underline">About Us</a></li>
          <li><a href="#fulfillment" className="px-2 py-2 text-indigo-400 hover:text-indigo-600 no-underline">Fulfillment</a></li>
          <li><a href="#software" className="px-2 py-2 text-indigo-400 hover:text-indigo-600 no-underline">Software</a></li>
          <li><a href="#storage" className="px-2 py-2 text-indigo-400 hover:text-indigo-600 no-underline">Storage</a></li>
          <li><a href="#news" className="px-2 py-2 text-indigo-400 hover:text-indigo-600 no-underline">News</a></li>
        </ul>
        <button className="hidden md:block bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-600">
          <a href='/Contact' className='text-gray-200 no-underline'> Contact Us</a>
        </button>
        <div className="md:hidden">
          <button className="text-indigo-400 focus:outline-none" onClick={() => setOpen(!open)}>
            <i className="fas fa-bars p-2"></i>
          </button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-gray-800 p-6">
          <ul className="space-y-4">
            <li className='p-1 rounded hover:bg-gray-700 hover:outline hover:outline-1 hover:outline-slate-50'><a href="#home" className="text-indigo-400 hover:text-indigo-600 no-underline">Home</a></li>
            <li className='p-1 rounded hover:bg-gray-700 hover:outline hover:outline-1 hover:outline-slate-50'><a href="#about" className="text-indigo-400 hover:text-indigo-600 no-underline">About Us</a></li>
            <li className='p-1 rounded hover:bg-gray-700 hover:outline hover:outline-1 hover:outline-slate-50'><a href="#fulfillment" className="text-indigo-400 hover:text-indigo-600 no-underline">Fulfillment</a></li>
            <li className='p-1 rounded hover:bg-gray-700 hover:outline hover:outline-1 hover:outline-slate-50'><a href="#software" className="text-indigo-400 hover:text-indigo-600 no-underline">Software</a></li>
            <li className='p-1 rounded hover:bg-gray-700 hover:outline hover:outline-1 hover:outline-slate-50'><a href="#storage" className="text-indigo-400 hover:text-indigo-600 no-underline">Storage</a></li>
            <li className='p-1 rounded hover:bg-gray-700 hover:outline hover:outline-1 hover:outline-slate-50'><a href="#news" className="text-indigo-400 hover:text-indigo-600 no-underline">News</a></li>
            <li className='p-1 rounded hover:bg-gray-700 hover:outline hover:outline-1 hover:outline-slate-50'><a href='/Contact' className='text-indigo-400 hover:text-indigo-600 no-underline'>Contact Us</a></li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <header className="mx-5 items-center text-center py-16">
        <h1 className="text-4xl font-bold text-indigo-400 uppercase mb-4">Safe, Fast & Reliable</h1>
        <h2 className="text-3xl font-bold mb-6">Trusted Global Logistics Services</h2>
        <p className="max-w-2xl text-gray-400 mb-8">
          Focused on B2C Delivery specifically for E-commerce. Free Multi-Channel Carrier Software, Strategic Partnerships, and Carrier Relationships.
        </p>
        <div className="space-x-4">
          <button className="bg-indigo-500 px-6 py-2 rounded hover:bg-indigo-600" >
            <a href='/Customer' className='text-gray-200 no-underline'>Explore Now</a>
          </button>
          <button className="border border-indigo-500 px-6 py-2 rounded hover:bg-indigo-500 hover:text-white">
            <a href='/about' className='text-gray-200 no-underline'>About</a>
          </button>
        </div>
        <div className="header-img">
          <img
            src="./src/assets/logistics3.png"
            alt="Logistics Illustration"
            className="w-full"
          />
        </div>

      </header>

      {/* Statistics Section */}
      <section className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-semibold mb-8">
            The Numbers Speak for Themselves
          </h2>
          <div className="flex justify-center items-center space-x-8 text-center">
            {/* First Statistic */}
            <div>
              <p className="text-xl sm:text-4xl font-bold">24,000</p>
              <p className="text-gray-400 text-xs sm:text-base">Average Labels a Day</p>
            </div>

            <div className="border-l-2 border-gray-700 h-12"></div>
            {/* Second Statistic */}
            <div>
              <p className="text-xl sm:text-4xl font-bold">150+</p>
              <p className="text-gray-400 text-xs sm:text-base">Happy Customers</p>
            </div>

            <div className="border-l-2 border-gray-700 h-12"></div>
            {/* Third Statistic */}
            <div>
              <p className="text-xl sm:text-4xl font-bold">5</p>
              <p className="text-gray-400 text-xs sm:text-base">Locations & Expanding</p>
            </div>



          </div>
        </div>
      </section>



      {/* Customer Reviews */}
      <div className="div">
        <CustomerRating />
      </div>
      {/* Illustration Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-400 mb-4">
              With a focus on excellence, we provide top-tier logistics solutions tailored to your business needs.
            </p>
            <button className="bg-indigo-500 px-6 py-2 rounded hover:bg-indigo-600">Learn More</button>
          </div>
          <div className="md:w-1/2">
            <img
              src="./src/assets/whyChooseUspng.png"
              alt="Logistics Illustration"
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/*Brand parnter  */}
      <div className="div">
        <BrandPartners />
      </div>


      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 ">Locations</h3>
              <ul>
                <li><a href="#" className="text-gray-500">New York, USA</a></li>
                <li><a href="#" className="text-gray-500">Berlin,Germany</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p><a href="tel:+1234567890" className="text-gray-500">+1 234 567 890</a></p>
              <p><a href="mailto:support@swiftlylogistics.com" className="text-gray-500 ">support@swiftlylogistics.com</a></p>
              <p>Office Hours: Mon-Fri, 9 AM - 6 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <ul className="flex justify-center space-x-4">
                <li><a href="#" className="text-gray-500"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#" className="text-gray-500"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#" className="text-gray-500"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="#" className="text-gray-500"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4">
            <p className="text-sm text-center">&copy; 2024 Swiftly Logistics. All rights reserved.</p>
            <p className="text-sm text-center"><a href="#" className="hover:text-gray-200">Privacy Policy</a> | <a href="#" className="hover:text-gray-200">Terms of Service</a></p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;
