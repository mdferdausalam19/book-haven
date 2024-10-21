import { useEffect, useState } from "react";
import BookCardContainer from "./BookCardContainer";
import Loader from "./Loader";

const BooksSection = () => {
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoader(false);
      });
  }, []);
  if (loader) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="mt-14 text-center max-w-[650px] mx-auto mb-5">
        <h2 className="text-3xl font-bold mb-3">Book Collection</h2>
        <p>
          Discover your next favorite read in our extensive library. Each book
          offers a captivating journey with options to explore, wishlist, or
          dive into related titles.
        </p>
      </div>
      <div className="mb-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {books.map((book) => (
          <BookCardContainer key={book.bookId} book={book}></BookCardContainer>
        ))}
      </div>
    </div>
  );
};

export default BooksSection;
