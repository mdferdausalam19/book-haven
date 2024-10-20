import { IoLocationOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";
const ListedBookCard = ({ book }) => {
  const {
    bookId,
    image,
    tags,
    bookName,
    author,
    category,
    rating,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center shadow-xl p-6 rounded-b-2xl rounded-r-2xl gap-5 border">
        <div>
          <img src={image} alt="" className="rounded-xl w-40" />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p>By: {author}</p>
          <div className="lg:flex items-center gap-8">
            <div className="flex items-center gap-3">
              <p className="font-bold">Tag: </p>
              <ul className="flex items-center gap-5">
                {tags.map((tag, idx) => (
                  <li
                    className="text-[#23BE0A] bg-base-200 p-1 rounded-lg"
                    key={idx}
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-3 lg:mt-0">
              <p className="flex items-center gap-1">
                {" "}
                <IoLocationOutline /> Year of Publishing: {yearOfPublishing}
              </p>
            </div>
          </div>
          <div className="lg:flex items-center gap-5">
            <p className="flex items-center gap-1">
              <FaUser />
              Publisher: {publisher}
            </p>
            <p className="flex items-center gap-1 mt-3 lg:mt-0">
              <MdOutlineLibraryBooks />
              Page: {totalPages}
            </p>
          </div>
          <div className="border border-dashed"></div>
          <div className="flex items-center flex-wrap gap-5">
            <p className="text-[#328EFF] py-2 px-3 rounded-full bg-[rgba(50,142,255,0.15)]">
              Category: {category}
            </p>
            <p className="text-[#FFAC33] py-2 px-3 rounded-full bg-[rgba(255,172,51,0.15)]">
              Rating: {rating}
            </p>
            <Link
              to={`/book-details/${bookId}`}
              className="text-white py-2 px-3 rounded-full bg-[#23BE0A]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
