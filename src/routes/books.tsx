import { useLocation } from "react-router-dom";

function Books() {
  const location = useLocation();
  const name = location.pathname.slice(7).replace(/%20/g, " ");

  return (
    <div className="bg-brown-light w-[75rem] h-[32.9rem]">
      <div className="bg-white-cream rounded-xl mr-8 h-[32rem] px-14 py-8 overflow-y-scroll">
        <h2 className="text-4xl text-blue-400 pb-5 font-medium">{name}</h2>
      </div>
    </div>
  );
}

export default Books;
