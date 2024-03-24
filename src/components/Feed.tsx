import { useState, useEffect } from "react";

function Feed() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const url =
      "https://book-finder1.p.rapidapi.com/api/search?author=Brandon%20Sanderson&book_type=Fiction&results_per_page=5&page=1";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2c046126b3msh49e1c5bc308fe4cp1d87ebjsn7f024c9e00ed",
        "X-RapidAPI-Host": "book-finder1.p.rapidapi.com"
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = await result.results;
        setResult(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-brown-light w-[75rem]">
      <div className="bg-white-cream rounded-xl mr-8 h-[40rem] p-5 flex flex-wrap space-x-8">
        {isLoading && <p>Loading...</p>}
        {result?.map((book) => (
          <div key={book.work_id} className="flex space-x-4">
            <img
              src={book.published_works[0].cover_art_url}
              alt={book.title}
              className="h-[10rem] w-[7rem] rounded-lg"
            />
            <div>
              <h2 className="text-xl">{book.title}</h2>
              <p>{book.authors}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Feed;
