import { useEffect, useState } from "react";
import { getWishListedBooks } from "../utils/localStorage";
import ListedBookCard from "../components/ListedBookCard";

const WishlistBooks = () => {
  const [wishlistBooks, setWishListBooks] = useState([]);
  useEffect(() => {
    setWishListBooks(getWishListedBooks());
  }, []);
  return (
    <div className="space-y-5">
      {wishlistBooks.map((wishlistBook) => (
        <ListedBookCard
          key={wishlistBook.bookId}
          book={wishlistBook}
        ></ListedBookCard>
      ))}
    </div>
  );
};

export default WishlistBooks;
