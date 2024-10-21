import { useEffect, useState } from "react";
import { getWishListedBooks } from "../utils/localStorage";
import ListedBookCard from "../components/ListedBookCard";
import { useOutletContext } from "react-router-dom";

const WishlistBooks = () => {
  const [wishlistBooks, setWishListBooks] = useState([]);
  const { sortBy } = useOutletContext();
  useEffect(() => {
    setWishListBooks(getWishListedBooks());
  }, []);
  const sortedWishlistBooks = [...wishlistBooks].sort((a, b) => {
    if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "pages") {
      return b.totalPages - a.totalPages;
    } else if (sortBy === "year") {
      return b.yearOfPublishing - a.yearOfPublishing;
    }
    return 0;
  });
  return (
    <div className="space-y-5">
      {sortedWishlistBooks.map((wishlistBook) => (
        <ListedBookCard
          key={wishlistBook.bookId}
          book={wishlistBook}
        ></ListedBookCard>
      ))}
    </div>
  );
};

export default WishlistBooks;
