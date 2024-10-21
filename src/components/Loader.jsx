import { RotateLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <RotateLoader size={25} color="#23BE0A" />
    </div>
  );
};

export default Loader;
