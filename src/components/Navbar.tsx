function Navbar() {
  return (
    <nav className="bg-brown-light text-brown-dark flex items-center justify-between h-[5rem] px-8">
      <div className="flex space-x-12">
        <a className="text-3xl" href="">
          BOOKS
        </a>
        <input
          className="bg-white-cream rounded-full outline-none pl-4"
          type="text"
          placeholder="Search..."
        />
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
