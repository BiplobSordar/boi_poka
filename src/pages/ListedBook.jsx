// pages/ListedBooksPage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import LoadingSpinner from '../components/BookLoadingSpinner';
import { booksData } from '../data/booksData';
import { useBooks } from '../Context/BookContext';


const ListedBooksPage = () => {
  const navigate = useNavigate();
  const [allBooks, setAllBooks] = useState([]);


  const [loading, setLoading] = useState(true);

  const [sortBy, setSortBy] = useState('dateAdded');
  const [filterCategory, setFilterCategory] = useState('all');
  const [tabIndex, setTabIndex] = useState(0);

  const { markedBooks,
    wishlistBooks,
    addToMarked,
    addToWishlist,
    removeFromWishlist,
    clearAll, removeFromMarked } = useBooks()

  useEffect(() => {
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Mock data - replace with API calls
      const mockAllBooks = JSON.parse(booksData)

      setAllBooks(mockAllBooks);

    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };




  const sortBooks = (books) => {
    const sorted = [...books];
    switch (sortBy) {
      case 'title':
        return sorted.sort((a, b) => a.bookName.localeCompare(b.bookName));
      case 'author':
        return sorted.sort((a, b) => a.author.localeCompare(b.author));
      case 'rating':
        return sorted.sort((a, b) => b.rating - a.rating);
      case 'priceHigh':
        return sorted.sort((a, b) => b.price - a.price);
      case 'priceLow':
        return sorted.sort((a, b) => a.price - b.price);
      case 'dateAdded':
      default:
        return sorted.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
    }
  };

  const filterBooks = (books) => {
    if (filterCategory === 'all') return books;
    return books.filter(book => book.category === filterCategory);
  };

  const getProcessedBooks = (books) => {
   
    return sortBooks(filterBooks(books));
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-400">★</span>);
    }

    const emptyStars = 5 - fullStars;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }

    return stars;
  };

  const renderBookCard = (book, listType) => (
    <div
      key={book.bookId}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-48 h-64 sm:h-auto flex-shrink-0 relative group">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-full h-full object-cover cursor-pointer group-hover:opacity-90 transition"
            onClick={() => navigate(`/book/${book.bookId}`)}
          />
          <span className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
            {book.category}
          </span>
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-3">
            <div className="flex-1">
              <h3
                className="text-xl font-bold text-gray-800 mb-2 hover:text-primary cursor-pointer transition"
                onClick={() => navigate(`/book/${book.bookId}`)}
              >
                {book.bookName}
              </h3>
              <p className="text-gray-600 font-medium mb-3">by {book.author}</p>
            </div>

            <button
              onClick={()=>{}}
              disabled={true}
              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-full transition disabled:opacity-50"
              title="Remove from list"
            >
              {1 === book.bookId ? (
                <span className="animate-spin">⌛</span>
              ) : (
                <span className="text-xl">❌</span>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-sm">{renderStars(book.rating)}</div>
            <span className="text-gray-600 text-sm font-semibold">{book.rating}/5</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-accent text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <span>📖</span> {book.totalPages} pages
            </span>
            <span className="flex items-center gap-1">
              <span>📅</span> Added {new Date(book.addedDate).toLocaleDateString()}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-gray-200">
            <div>
              <p className="text-sm text-gray-500 mb-1">Price</p>
              <p className="text-2xl font-bold text-primary">${book.price}</p>
            </div>

            <div className="flex gap-3 w-full sm:w-auto">

              <button

                onClick={() => { markedBooks.some((mark) => mark.bookId == book.bookId) ? removeFromMarked(book.bookId) : addToMarked(book) }}
                
                className="flex-1 sm:flex-none bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {markedBooks.some((mark) => mark.bookId == book.bookId) ? 'Marked' : 'Marked As Read'}
              </button>


              <button
                onClick={() =>wishlistBooks.some((wish) => wish.bookId == book.bookId)?removeFromWishlist(book.bookId):addToWishlist(book)}
                className="flex-1 sm:flex-none bg-secondary text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                {wishlistBooks.some((wish) => wish.bookId == book.bookId) ? 'Wished' : 'Add to Wishlist'}

              </button>

              <button
                onClick={() => navigate(`/book/${book.bookId}`)}
                className="flex-1 sm:flex-none bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const categories = [...new Set(allBooks.map(book => book.category))];



  if (loading) return <LoadingSpinner message="Loading your books..." />;


  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-gradient-to-r from-primary to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 flex items-center gap-3">
            <span className="text-5xl">📚</span>
            My Listed Books
          </h1>
          <p className="text-blue-100 text-lg">
            Manage your reading journey - track what you've read and plan what's next
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="dateAdded">Sort by: Date Added</option>
                <option value="title">Sort by: Title</option>
                <option value="author">Sort by: Author</option>
                <option value="rating">Sort by: Rating</option>
                <option value="priceHigh">Sort by: Price (High to Low)</option>
                <option value="priceLow">Sort by: Price (Low to High)</option>
              </select>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="text-sm text-gray-600">
              Total Books: {tabIndex === 0 ? getProcessedBooks(allBooks).length :
                tabIndex === 1 ? getProcessedBooks(markedBooks).length :
                  getProcessedBooks(wishlistBooks).length}
            </div>
          </div>
        </div>

       
        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
          <TabList className="flex border-b border-gray-200 mb-8 bg-white rounded-t-lg shadow-sm">
            <Tab className="flex-1 px-6 py-4 text-center cursor-pointer hover:bg-gray-50 focus:outline-none transition font-semibold"
              selectedClassName="border-b-2 border-secondary text-secondary bg-accent">
              <span className="flex items-center justify-center gap-2">
                <span>📚</span>
                All Books ({allBooks.length})
              </span>
            </Tab>
            <Tab className="flex-1 px-6 py-4 text-center cursor-pointer hover:bg-gray-50 focus:outline-none transition font-semibold"
              selectedClassName="border-b-2 border-secondary text-secondary bg-accent">
              <span className="flex items-center justify-center gap-2">
                <span>✅</span>
                Marked as Read ({markedBooks.length})
              </span>
            </Tab>
            <Tab className="flex-1 px-6 py-4 text-center cursor-pointer hover:bg-gray-50 focus:outline-none transition font-semibold"
              selectedClassName="border-b-2 border-secondary text-secondary bg-accent">
              <span className="flex items-center justify-center gap-2">
                <span>❤️</span>
                Wishlist ({wishlistBooks.length})
              </span>
            </Tab>
          </TabList>

         
          <TabPanel>
            <div className="space-y-6">
              {getProcessedBooks(allBooks).length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <div className="text-6xl mb-4">📭</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">No books found</h3>
                  <p className="text-gray-600">Try adjusting your filters or add some books to your collection.</p>
                </div>
              ) : (
                getProcessedBooks(allBooks).map(book => renderBookCard(book, 'all'))
              )}
            </div>
          </TabPanel>

        
          <TabPanel>
            <div className="space-y-6">
              {getProcessedBooks(markedBooks).length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">No books marked as read</h3>
                  <p className="text-gray-600 mb-6">Start tracking your reading progress by marking books as read!</p>
                  <button
                    onClick={() => setTabIndex(0)}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                  >
                    Browse All Books
                  </button>
                </div>
              ) : (
                getProcessedBooks(markedBooks).map(book => renderBookCard(book, 'read'))
              )}
            </div>
          </TabPanel>

         
          <TabPanel>
            <div className="space-y-6">
              {getProcessedBooks(wishlistBooks).length === 0 ? (
                <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                  <div className="text-6xl mb-4">💔</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-600 mb-6">Add books you want to read in the future!</p>
                  <button
                    onClick={() => navigate('/home')}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
                  >
                    Discover Books
                  </button>
                </div>
              ) : (
                getProcessedBooks(wishlistBooks).map(book => renderBookCard(book, 'wishlist'))
              )}
            </div>
          </TabPanel>
        </Tabs>

       
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Reading Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{allBooks.length}</div>
              <p className="text-gray-600 mt-1">Total Books</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">{markedBooks.length}</div>
              <p className="text-gray-600 mt-1">Books Read</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary">{wishlistBooks.length}</div>
              <p className="text-gray-600 mt-1">Want to Read</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600">
                {markedBooks.reduce((sum, book) => sum + book.totalPages, 0).toLocaleString()}
              </div>
              <p className="text-gray-600 mt-1">Pages Read</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksPage;