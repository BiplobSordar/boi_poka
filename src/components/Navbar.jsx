// components/Navbar.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { UserContext } from '../Context/userContext';

import WishlistIcon from './WishListIcon';
import { useBooks } from '../Context/BookContext';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = useNavigate()
  const { wishlistBooks } = useBooks()

  const { user } = useContext(UserContext)

  return (
    <nav className="bg-primary shadow-md sticky top-0 z-50">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

   
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-3xl">📚</span>
              <span className="text-white text-2xl font-bold tracking-tight">BookHub</span>
            </Link>
          </div>

         
          <div className="hidden md:flex items-center space-x-8">
            <Link className="block text-white hover:text-secondary py-2" to={'/'}>Home</Link>

            <Link to="/listed-books" className="block text-white hover:text-secondary py-2">Listed Books</Link>

            <Link to="/about" className="block text-white hover:text-secondary py-2">About</Link>
            <Link to="/service" className="block text-white hover:text-secondary py-2">Services</Link>
            <Link to="/contact" className="block text-white hover:text-secondary py-2">Contact</Link>
          </div>

        
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search books..."
                className="bg-white rounded-full py-2 pl-10 pr-4 w-48 focus:w-56 transition-all duration-300 text-sm"
              />
              <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
            </div>
            {
              user ?<> <WishlistIcon count={wishlistBooks.length} /> <LogoutButton/> </>: <button onClick={() => { navigation('/auth') }} className="bg-secondary text-white px-4 py-1.5 rounded-full font-semibold hover:bg-orange-700 transition">
                Authenticate
              </button>
            }


          </div>

         
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>




      {isMenuOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="fixed top-0 right-0 w-3/4 h-full bg-primary pb-4 px-6 space-y-4 z-50 md:hidden shadow-2xl"
        >
         
          <div className="flex justify-end pt-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-secondary transition"
            >
              <X size={28} />
            </button>
          </div>

    
          <Link className="block text-white hover:text-secondary py-2" to='/'>Home</Link>
          <Link to="/listed-books" className="block text-white hover:text-secondary py-2">Listed Books</Link>
          <Link to="/about" className="block text-white hover:text-secondary py-2">About</Link>
          <Link to="/service" className="block text-white hover:text-secondary py-2">Services</Link>
          <Link to="/contact" className="block text-white hover:text-secondary py-2">Contact</Link>

         
          <div className="pt-4 border-t border-blue-800">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search books..."
                className="bg-white rounded-full py-2 pl-10 pr-4 w-full text-sm"
              />
              <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
            </div>
            <div className="flex flex-col space-y-2">
              <button onClick={() => { navigation('/auth/login') }} className="border-2 border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-primary transition">
                Sign In
              </button>
              <button onClick={() => { navigation('/auth/sign-up') }} className="bg-secondary text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-700 transition">
                Sign Up
              </button>
            </div>
          </div>
        </motion.div>
      )}


    </nav>
  );
};

export default Navbar;