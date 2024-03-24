import Cards from "./Cards";

function Feed() {
  return (
    <div className="bg-brown-light w-[75rem]">
      <div className="bg-white-cream rounded-xl mr-8 h-[45rem] px-14 py-8">
        <h2 className="text-4xl text-blue-400 pb-5 font-medium">POPULAR</h2>
        <Cards url="https://book-finder1.p.rapidapi.com/api/search?author=Tolkien&book_type=Fiction&results_per_page=5&page=1" />
        <h2 className="text-4xl text-blue-400 pb-5 pt-5 font-medium">
          YOU MAY LIKE
        </h2>
        <Cards url="https://book-finder1.p.rapidapi.com/api/search?author=Brandon%20Sanderson&book_type=Fiction&results_per_page=5&page=1" />
      </div>
    </div>
  );
}

export default Feed;
