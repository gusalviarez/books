function Sidebar() {
  return (
    <div className="bg-brown-light min-w-40 h-[32rem]">
      <ul className="flex flex-col space-y-4">
        <li className="bg-white-cream mx-6 py-1 rounded-full flex justify-center">
          Home
        </li>
        <li className="bg-white-cream mx-6 py-1 rounded-full flex justify-center">
          My library
        </li>
        <li className="bg-white-cream mx-6 py-1 rounded-full flex justify-center">
          Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
