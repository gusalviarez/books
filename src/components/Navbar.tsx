import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-brown-light text-brown-dark flex items-center justify-between h-[5rem] px-8">
      <div className="flex space-x-12">
        <a className="text-3xl" href="">
          BOOKS
        </a>
        <div className="bg-white-cream flex items-center rounded-full pl-4 pr-20">
          <FaSearch />
          <input
            className="bg-white-cream text-md outline-none pl-2 w-full"
            type="text"
            placeholder="Search for book or author..."
          />
        </div>
      </div>
      <ul className="flex space-x-8">
        <li>
          <button className="bg-white-cream rounded-full py-2 px-4">
            Log In
          </button>
        </li>
        <li>
          <button className="bg-white-cream rounded-full py-2 px-4">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
