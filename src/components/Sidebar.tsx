import { FaHouse } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path; // Check if current path matches
  };

  return (
    <div className="bg-brown-light min-w-44 h-[32.9rem] text-brown-dark">
      <ul className="flex flex-col space-y-4">
        <li
          className={`bg-${
            isActive("/") ? "white-cream" : "brown-light"
          } mx-6 py-1 rounded-full flex justify-center items-center space-x-2`}
        >
          <FaHouse />
          <Link to={`/`}>
            <span>Home</span>
          </Link>
        </li>
        <li
          className={`bg-${
            isActive("/library") ? "white-cream" : "brown-light"
          } mx-6 py-1 rounded-full flex justify-center items-center space-x-2`}
        >
          <FaBook />
          <Link to={`library`}>
            <span>My library</span>
          </Link>
        </li>
        <li
          className={`bg-${
            isActive("/settings") ? "white-cream" : "brown-light"
          } mx-6 py-1 rounded-full flex justify-center items-center space-x-2`}
        >
          <FaGear />
          <Link to={`settings`}>
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
