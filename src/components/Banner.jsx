import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center bg-base-200 rounded-3xl p-5 md:p-10 gap-10">
          <div className="md:w-1/2 space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold">
              Explore the World of Books at BookHaven
            </h2>
            <p>
              Discover a vast collection of your favorite books, curated for
              every reader. Add books to your wishlist, dive into compelling
              stories, and keep track of all your favorite reads in one place.
              BookHaven is your gateway to literary adventures.
            </p>
            <Link to={"/listed-books"} className="btn bg-[#23BE0A] text-white">
              View The List
            </Link>
          </div>
          <div className="">
            <img className="w-80" src="/images/dating-playbook.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
