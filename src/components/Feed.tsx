import FakeCards from "./FakeCards";

function Feed() {
  return (
    <div className="bg-brown-light w-[75rem] h-[32.9rem]">
      <div className="bg-white-cream rounded-xl mr-8 h-[32rem] px-14 py-8 overflow-y-scroll">
        <h2 className="text-4xl text-blue-400 pb-5 font-medium">POPULAR</h2>
        <FakeCards />
        <div className="flex flex-row justify-end pt-5 text-white-cream">
          <button className="bg-blue-400 rounded-md w-20 h-8">see all</button>
        </div>
        <h2 className="text-4xl text-blue-400 pb-5 pt-8 font-medium">
          YOU MAY LIKE
        </h2>
        <FakeCards />
        <div className="flex flex-row justify-end pt-5 text-white-cream">
          <button className="bg-blue-400 rounded-md w-20 h-8">see all</button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
