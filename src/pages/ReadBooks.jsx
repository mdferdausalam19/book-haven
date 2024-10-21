import { useEffect, useState } from "react";
import { getReadBooks } from "../utils/localStorage";
import ListedBookCard from "../components/ListedBookCard";
import { useOutletContext } from "react-router-dom";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  const { sortBy } = useOutletContext();
  useEffect(() => {
    setReadBooks(getReadBooks());
  }, []);
  const sortedBooks = [...readBooks].sort((a, b) => {
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
      {sortedBooks.map((readBook) => (
        <ListedBookCard key={readBook.bookId} book={readBook}></ListedBookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
