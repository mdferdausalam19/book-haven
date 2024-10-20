import { useLoaderData, useParams } from "react-router-dom";
import { setReadBook, setWishListBook } from "../utils/localStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId === parseInt(id));
  const {
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="mt-5 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <img src={image} className="bg-base-200 p-10 rounded-2xl" />
        </div>
        <div>
          <h2 className=" sm:text-3xl lg:text-4xl font-bold">{bookName}</h2>
          <p className="mt-2 text-xl">By: {author}</p>
          <div className="border-2 border-dashed mt-3 mb-3"></div>
          <p className="text-xl">{category}</p>
          <div className="border-2 border-dashed mt-3 mb-3"></div>
          <p>
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex items-center gap-2 mt-3 mb-5">
            <p className="font-bold">Tag: </p>{" "}
            <ul className="flex gap-2">
              {tags.map((tag, idx) => (
                <li
                  key={idx}
                  className="bg-base-200 p-2 rounded-lg text-[#23BE0A]"
                >
                  #{tag}
                </li>
              ))}
            </ul>{" "}
          </div>
          <div className="border-2 border-dashed mt-3 mb-3"></div>
          <div className="flex items-center gap-4 mt-3">
            <p>Number of Pages: </p>
            <p className="font-bold">{totalPages}</p>
          </div>
          <div className="flex items-center gap-20 mt-3">
            <p>Publisher: </p>
            <p className="font-bold">{publisher}</p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <p>Year of Publishing: </p>
            <p className="font-bold">{yearOfPublishing}</p>
          </div>
          <div className="flex items-center gap-[103px] mt-3">
            <p>Rating: </p>
            <p className="font-bold">{rating}</p>
          </div>
          <div className="mt-5 space-x-5">
            <button
              onClick={() => setReadBook(book)}
              className="btn text-[#23BE0A] border border-[#23BE0A] font-bold bg-white hover:bg-[#23BE0A] hover:text-white"
            >
              Read
            </button>
            <button
              onClick={() => setWishListBook(book)}
              className="btn text-[#23BE0A] border border-[#23BE0A] font-bold bg-white hover:bg-[#23BE0A] hover:text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
