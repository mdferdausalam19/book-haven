import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption);
  };
  return (
    <div className="mt-5">
      <h2 className="mb-5 text-2xl text-center font-bold bg-base-200 p-5 rounded-2xl">
        Books
      </h2>
      <div className="flex justify-center mb-14">
        <div className="dropdown">
          <div tabIndex={0} className="btn m-1 bg-[#23BE0A] text-white">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a onClick={() => handleSortChange("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSortChange("pages")}>Number of Pages</a>
            </li>
            <li>
              <a onClick={() => handleSortChange("year")}>Publishing Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
        <Link
          to={""}
          onClick={() => setTabIndex(0)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-black border-b-0" : "border-b"
          } rounded-t-lg`}
        >
          <p className="text-lg">Read Books</p>
        </Link>
        <Link
          to={"wishlist-books"}
          onClick={() => setTabIndex(1)}
          className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-black border-b-0" : "border-b"
          } rounded-t-lg`}
        >
          <p className="text-lg">Wishlist Books</p>
        </Link>
      </div>
      <Outlet context={{ sortBy }}></Outlet>
    </div>
  );
};

export default ListedBooks;
