import FakeCards from "../components/Cards";
import SeeAllButton from "../components/SeeAllButton";

function Library() {
  return (
    <div className="bg-brown-light w-[75rem] h-[32.9rem]">
      <div className="bg-white-cream rounded-xl mr-8 h-[32rem] px-14 py-8 overflow-y-scroll">
        <h2 className="text-4xl text-blue-400 pb-5 font-medium">MY LIBRARY</h2>
        <FakeCards />
        <SeeAllButton />
      </div>
    </div>
  );
}

export default Library;
