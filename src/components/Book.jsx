
import React, { useContext, useEffect, useState } from 'react';
import { useBooks } from '../Context/BookContext';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const [imageError, setImageError] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToMarked, addToWishlist, wishlistBooks } = useBooks()
  const [isWishlisted, setIsWishlisted] = useState(false);
  const navigate = useNavigate()


 
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing
  } = book;


  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="text-yellow-400">★</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="text-yellow-400 relative">
          <span className="absolute overflow-hidden w-1/2">★</span>
          <span className="text-gray-300">★</span>
        </span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="text-gray-300">★</span>
      );
    }

    return stars;
  };


  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };



  useEffect(() => {
    const wished = wishlistBooks.some((wish) => wish.bookId == book.bookId)

    if (wished) {
      setIsWishlisted(true)
    }
  }, [wishlistBooks])

  return (
    <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">

      <div className="absolute top-4 left-4 z-10">
        <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
          {category}
        </span>
      </div>


      <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
        {!imageError ? (
          <img
            src={image}
            alt={bookName}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-indigo-700">
            <div className="text-center text-white p-6">
              <div className="text-6xl mb-4">📚</div>
              <p className="font-semibold">{bookName}</p>
            </div>
          </div>
        )}


        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm">Published {yearOfPublishing}</p>
            <p className="text-xs">{publisher}</p>
          </div>
        </div>
      </div>


      <div className="p-6">

        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {bookName}
        </h3>
        <p className="text-gray-600 mb-3 font-medium">
          by {author}
        </p>


        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-lg">
            {renderStars(rating)}
          </div>
          <span className="text-gray-600 text-sm font-semibold">
            {rating}/5
          </span>
        </div>


        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent text-gray-700 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>


        <div className="mb-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            {isExpanded ? review : truncateText(review)}
          </p>
          {review.length > 150 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-secondary text-sm font-semibold hover:underline mt-2"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </div>


        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <span>📖</span>
            {totalPages} pages
          </span>
          <span className="flex items-center gap-1">
            <span>📅</span>
            {yearOfPublishing}
          </span>
        </div>

        <div className="flex gap-3">
          <button onClick={() => { navigate(`/book/${bookId}`) }} className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors transform hover:scale-105">
            View Details
          </button>
          <button onClick={() => { addToWishlist(book) }} disabled={isWishlisted} className="flex-1 border-2 border-secondary text-secondary py-2 px-4 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all">
            {isWishlisted? 'Wished' : ' Add to WishList'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;