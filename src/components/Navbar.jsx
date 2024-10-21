import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <div className="flex flex-col lg:flex-row gap-4">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#23BE0A] border border-[#23BE0A] font-bold btn"
                : "btn border-none"
            } bg-white hover:bg-[#23BE0A] hover:text-white`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/listed-books"}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#23BE0A] border border-[#23BE0A] font-bold btn"
                : "btn border-none"
            } bg-white hover:bg-[#23BE0A] hover:text-white`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/pages-to-read"}
          className={({ isActive }) =>
            `${
              isActive
                ? "text-[#23BE0A] border border-[#23BE0A] font-bold btn"
                : "btn border-none"
            } bg-white hover:bg-[#23BE0A] hover:text-white`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-base-100 mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-base-200"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" text-3xl font-bold cursor-pointer">
          BookHaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4 hidden md:flex">
        <a className="btn bg-[#23BE0A] text-white hover:bg-white border hover:border-[#23BE0A] hover:text-[#23BE0A] ">
          Sign In
        </a>
        <a className="btn bg-white border border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
