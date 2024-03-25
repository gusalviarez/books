import { FaHouse } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

function Sidebar() {
  return (
    <div className="bg-brown-light min-w-44 h-[32.9rem] text-brown-dark">
      <ul className="flex flex-col space-y-4">
        <li className=" bg-white-cream mx-6 py-1 rounded-full flex justify-center items-center space-x-2">
          <FaHouse />
          <span>Home</span>
        </li>
        <li className="bg-brown-light mx-6 py-1 rounded-full flex justify-center items-center space-x-2">
          <FaBook />
          <span>My library</span>
        </li>
        <li className="bg-brown-light mx-6 py-1 rounded-full flex justify-center items-center space-x-2">
          <FaGear />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
