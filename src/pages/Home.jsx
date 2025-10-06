


import React, { useState, useEffect } from 'react';
import BannerSlider from '../components/Banner';
import BookCard from '../components/Book';
import LoadingSpinner from '../components/BookLoadingSpinner';
import {booksData} from '../data/booksData';
import ErrorPage from './Error';


const Home= () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        // await new Promise((resolve,reject) => setTimeout(reject, 1500));
        
       
        
        const mockBooks = JSON.parse(booksData)

        setBooks(mockBooks);
      } catch (err) {

        setError("Failed to load books. Please try again later.");
        console.error("Book fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <LoadingSpinner message="Fetching your next great read..." />;
  if (error) return <ErrorPage errorCode='500' errorMessage={error}/>

  return (
    <div className="min-h-screen bg-gray-50">
     <BannerSlider/>
      
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Curated Collection
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover handpicked books across genres, from timeless classics to 
              the latest bestsellers. Each title has been selected by our team of 
              literary experts for its quality and impact.
            </p>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {books.map((book) => (
              <BookCard 
                key={book.bookId} 
                book={book} 
                className="transform transition hover:-translate-y-2 hover:z-10"
              />
              
            ))}
          </div>
        


          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2">
              <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">1</button>
              <button className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center">2</button>
              <button className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center">3</button>
              <button className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center">...</button>
              <button className="w-10 h-10 rounded-full border border-primary text-primary flex items-center justify-center">10</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;