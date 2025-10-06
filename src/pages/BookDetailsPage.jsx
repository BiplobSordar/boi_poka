// pages/BookDetailsPage.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingSpinner from '../components/BookLoadingSpinner';
import { booksData } from '../data/booksData';
import { useBooks } from '../Context/BookContext';

const BookDetailsPage = () => {
  const { addToMarked, addToWishlist, removeFromWishlist, markedBooks, removeFromMarked,
    wishlistBooks } = useBooks()
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [activeTab, setActiveTab] = useState('description');


  useEffect(() => {
    const existAtMarked = markedBooks.some((mark) => mark.bookId == id)
    const existAtWished = wishlistBooks.some((wish) => wish.bookId == id)

    if (existAtMarked) {
      setIsMarked(true)
    }

    if (existAtWished) {
      setIsWishlisted(true)
    }
  }, [id])

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        setLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));



        const mockBook = JSON.parse(booksData).filter((item) => item.bookId == id)
        console.log(mockBook[0], 'thsi is the book')

        setBook(mockBook[0]);
      } catch (error) {
        console.error("Error fetching book:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const handleWishlist = () => {

    if (isWishlisted) {
      removeFromWishlist(book.bookId)
    }
    if (!isWishlisted) {
      addToWishlist(book)
    }
    setIsWishlisted(!isWishlisted);

  };

  const handleReadNow = () => {
    if (isMarked) {
      removeFromMarked(book.bookId)
    } else {
      addToMarked(book)
    }

    setIsMarked(!isMarked)



  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-400 text-2xl">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400 text-2xl">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300 text-2xl">★</span>);
    }

    return stars;
  };

  if (loading) return <LoadingSpinner message="Loading book details..." />;
  if (!book) return <div className="text-center py-20">Book not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-secondary transition">Home</button>
            <span className="mx-2">›</span>
            <button onClick={() => navigate('/books')} className="hover:text-secondary transition">Books</button>
            <span className="mx-2">›</span>
            <span className="text-gray-800 font-medium">{book.bookName}</span>
          </div>
        </div>
      </div>


      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">


          <div className="lg:col-span-1">
            <div className="sticky top-24">

              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                <div className="relative group">
                  <img
                    src={book.image}
                    alt={book.bookName}
                    className="w-full rounded-lg shadow-md group-hover:shadow-2xl transition-all duration-300"
                  />

                  <span className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {book.category}
                  </span>
                </div>


                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-2">Price</p>
                  <p className="text-3xl font-bold text-primary">${book.price}</p>
                  <p className="text-sm text-green-600 mt-2">✓ {book.stock} copies in stock</p>
                </div>


                <div className="mt-6 space-y-3">
                  <button
                    onClick={handleReadNow}
                    className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <span className="text-xl">📖</span>
                    {isMarked ? 'Marked' : 'Mark As Read'}
                  </button>

                  <button
                    onClick={handleWishlist}
                    className={`w-full py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 ${isWishlisted
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white'
                      }`}
                  >
                    <span className="text-xl">{isWishlisted ? '❤️' : '🤍'}</span>
                    {isWishlisted ? 'In Wishlist' : 'Add to Wishlist'}
                  </button>
                </div>


                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3 text-center">Share this book</p>
                  <div className="flex justify-center gap-3">
                    <button className="w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">📘</button>
                    <button className="w-10 h-10 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition">🐦</button>
                    <button className="w-10 h-10 bg-green-600 text-white rounded-full hover:bg-green-700 transition">💬</button>
                    <button className="w-10 h-10 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition">✉️</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
           
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-3">{book.bookName}</h1>
                <p className="text-xl text-gray-600">by <span className="text-secondary font-semibold">{book.author}</span></p>
              </div>

          
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  {renderStars(book.rating)}
                </div>
                <span className="text-2xl font-bold text-gray-800">{book.rating}</span>
                <span className="text-gray-500">/ 5.0</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600">1,234 reviews</span>
              </div>

    
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-accent text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary hover:text-white transition cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>


              <div className="mb-6">
                <div className="flex border-b border-gray-200 mb-6">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`px-6 py-3 font-semibold transition-all ${activeTab === 'description'
                      ? 'text-secondary border-b-2 border-secondary'
                      : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab('details')}
                    className={`px-6 py-3 font-semibold transition-all ${activeTab === 'details'
                      ? 'text-secondary border-b-2 border-secondary'
                      : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => setActiveTab('author')}
                    className={`px-6 py-3 font-semibold transition-all ${activeTab === 'author'
                      ? 'text-secondary border-b-2 border-secondary'
                      : 'text-gray-500 hover:text-gray-700'
                      }`}
                  >
                    Author
                  </button>
                </div>

             
                <div className="prose max-w-none">
                  {activeTab === 'description' && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">About This Book</h3>
                      <p className="text-gray-700 leading-relaxed text-lg">{book.review}</p>
                    </div>
                  )}

                  {activeTab === 'details' && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Book Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">📚</span>
                          <div>
                            <p className="text-sm text-gray-500">Publisher</p>
                            <p className="font-semibold text-gray-800">{book.publisher}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-2xl">📅</span>
                          <div>
                            <p className="text-sm text-gray-500">Publication Year</p>
                            <p className="font-semibold text-gray-800">{book.yearOfPublishing}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-2xl">📖</span>
                          <div>
                            <p className="text-sm text-gray-500">Pages</p>
                            <p className="font-semibold text-gray-800">{book.totalPages}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-2xl">🌍</span>
                          <div>
                            <p className="text-sm text-gray-500">Language</p>
                            <p className="font-semibold text-gray-800">{book.language}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-2xl">🔢</span>
                          <div>
                            <p className="text-sm text-gray-500">ISBN</p>
                            <p className="font-semibold text-gray-800">{book.isbn}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <span className="text-2xl">🏷️</span>
                          <div>
                            <p className="text-sm text-gray-500">Category</p>
                            <p className="font-semibold text-gray-800">{book.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'author' && (
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
                      <div className="flex items-start gap-6 mb-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-primary to-indigo-700 rounded-full flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                          {book.author.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-gray-800 mb-2">{book.author}</h4>
                          <p className="text-gray-700 leading-relaxed">{book.authorBio}</p>
                        </div>
                      </div>
                      <button className="text-secondary font-semibold hover:underline">
                        View all books by {book.author} →
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

     
            <div className="bg-white rounded-2xl shadow-lg p-8 mt-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Reader Reviews</h3>

              <div className="flex flex-col md:flex-row gap-8 mb-8 pb-8 border-b border-gray-200">
                <div className="text-center md:text-left">
                  <p className="text-5xl font-bold text-primary mb-2">{book.rating}</p>
                  <div className="flex justify-center md:justify-start mb-2">
                    {renderStars(book.rating)}
                  </div>
                  <p className="text-gray-600">Based on 1,234 reviews</p>
                </div>

                <div className="flex-1">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-gray-600 w-12">{stars} star</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-secondary h-2 rounded-full"
                          style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-12">{stars === 5 ? '70%' : stars === 4 ? '20%' : '5%'}</span>
                    </div>
                  ))}
                </div>
              </div>

            
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    JD
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold text-gray-800">John Doe</p>
                      <span className="text-gray-400">•</span>
                      <p className="text-sm text-gray-500">2 weeks ago</p>
                    </div>
                    <div className="flex mb-3">{renderStars(5)}</div>
                    <p className="text-gray-700 leading-relaxed">
                      An absolutely brilliant read! Fitzgerald's prose is mesmerizing, and the story
                      has stayed with me long after finishing it. A true American classic that everyone
                      should experience at least once.
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full border-2 border-primary text-primary py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
         
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center text-gray-400">
              Related Book 1
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center text-gray-400">
              Related Book 2
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center text-gray-400">
              Related Book 3
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center text-gray-400">
              Related Book 4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;