import { useEffect, useState } from "react";
import { getReadBooks } from "../utils/localStorage";
import ListedBookCard from "../components/ListedBookCard";

const ReadBooks = () => {
  const [readBooks, setReadBooks] = useState([]);
  useEffect(() => {
    setReadBooks(getReadBooks());
  }, []);
  return (
    <div className="space-y-5">
      {readBooks.map((readBook) => (
        <ListedBookCard key={readBook.bookId} book={readBook}></ListedBookCard>
      ))}
    </div>
  );
};

export default ReadBooks;
