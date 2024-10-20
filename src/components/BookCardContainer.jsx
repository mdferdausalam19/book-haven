import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";

const BookCardContainer = ({ book }) => {
  const { bookId, image, tags, bookName, author, category, rating } = book;
  return (
    <div>
      <Link
        to={`/book-details/${bookId}`}
        className="card bg-base-100 shadow-xl h-[434px]"
      >
        <figure className="px-10 pt-10 max-h-[230px]">
          <img src={image} className="rounded-xl w-40 p-6" />
        </figure>

        <div className="card-body">
          <ul className="flex gap-2">
            {tags.map((tag, idx) => (
              <li
                key={idx}
                className="bg-base-200 p-2 rounded-lg text-[#23BE0A]"
              >
                {tag}
              </li>
            ))}
          </ul>
          <h2 className="card-title">{bookName}</h2>
          <p>By: {author}</p>
          <div className="border border-dashed"></div>
          <div className="flex justify-between">
            <p>{category}</p>
            <div className="text-right flex items-center gap-1">
              <p>{rating}</p>
              <p className="text-lg">
                <FaRegStar />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BookCardContainer;
