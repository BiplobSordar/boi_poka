
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
     
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-2">
              <span className="text-3xl">📚</span>
              <span className="text-2xl font-bold">BookHub</span>
            </a>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover your next favorite book from our curated collection of literary treasures. 
              Join our community of book lovers today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-xl hover:text-secondary transition">📘</a>
              <a href="#" className="text-xl hover:text-secondary transition">🐦</a>
              <a href="#" className="text-xl hover:text-secondary transition">📷</a>
              <a href="#" className="text-xl hover:text-secondary transition">💼</a>
            </div>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-white transition">Home</a></li>
              <li><a href="#browse" className="text-gray-300 hover:text-white transition">Browse Books</a></li>
              <li><a href="#categories" className="text-gray-300 hover:text-white transition">Categories</a></li>
              <li><a href="#authors" className="text-gray-300 hover:text-white transition">Featured Authors</a></li>
              <li><a href="#new" className="text-gray-300 hover:text-white transition">New Releases</a></li>
            </ul>
          </div>

   
          <div>
            <h3 className="text-lg font-semibold text-secondary mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#fiction" className="text-gray-300 hover:text-white transition">Fiction</a></li>
              <li><a href="#non-fiction" className="text-gray-300 hover:text-white transition">Non-Fiction</a></li>
              <li><a href="#mystery" className="text-gray-300 hover:text-white transition">Mystery</a></li>
              <li><a href="#sci-fi" className="text-gray-300 hover:text-white transition">Science Fiction</a></li>
              <li><a href="#biography" className="text-gray-300 hover:text-white transition">Biography</a></li>
            </ul>
          </div>

       
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p className="flex items-center"><span className="mr-2">📧</span> hello@bookhub.com</p>
              <p className="flex items-center"><span className="mr-2">📞</span> +88 (019) 123-45657</p>
              <p className="flex items-center"><span className="mr-2">📍</span> 123 Book Street, Jashore City</p>
            </div>

            <div>
              <h4 className="font-semibold text-secondary mb-2">Stay Updated</h4>
              <form className="flex flex-col flex-wrap lg:flex-row gap-2 mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-3 py-2 rounded-md text-white text-sm focus:outline-none focus:ring-2 border border-orange-400 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-700 transition text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

      
        <div className="border-t border-blue-800 pt-6 mt-8 text-center text-sm text-gray-400">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; 2024 BookHub. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition">Cookie Policy</a>
            </div>
            <p>Developed By Biplob Sordar</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;