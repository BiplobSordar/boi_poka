import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";


const BookContext = createContext();


export const BookProvider = ({ children }) => {
    const [markedBooks, setMarkedBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);


    const addToMarked = (book) => {
        setMarkedBooks((prev) => {
            const exists = prev.find((b) => b.bookId === book.bookId);
            if (exists) {

                return prev;
            }

            return [...prev, book];
        });
    };

    const removeFromMarked = (bookId) => {
        setMarkedBooks((prev) => prev.filter((b) => b.bookId !== bookId));
    };


    const addToWishlist = (book) => {

        setWishlistBooks((prev) => {
            const exists = prev.find((b) => b.boodId === book.bookId);
            return exists ? prev : [...prev, book];
        });
    };


    const removeFromWishlist = (bookId) => {
        setWishlistBooks((prev) => prev.filter((b) => b.bookId !== bookId));
    };


    const clearAll = () => {
        setMarkedBooks([]);
        setWishlistBooks([]);
    };


    return (
        <BookContext.Provider
            value={{
                markedBooks,
                wishlistBooks,
                addToMarked,
                addToWishlist,
                removeFromWishlist,
                clearAll,
                removeFromMarked
            }}
        >
            {children}
        </BookContext.Provider>
    );
};


export const useBooks = () => useContext(BookContext);
