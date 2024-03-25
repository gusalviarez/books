import { FaArrowRight } from "react-icons/fa6";

function SeeAllButton() {
  return (
    <div className="flex flex-row justify-end pt-5 text-white-cream">
      <button className="bg-blue-400 rounded-md w-24 h-8 mt-10 ml-10 flex flex-row space-x-2 justify-center items-center">
        <span>see all</span>
        <FaArrowRight className="h-4" />
      </button>
    </div>
  );
}

export default SeeAllButton;
