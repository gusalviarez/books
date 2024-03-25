import { useState, useEffect } from "react";
import Card from "./Card";

interface Book {
  work_id: string;
  title: string;
  authors: string[]; // Array of author names
  published_works: { cover_art_url: string }[]; // Array with cover URL object
}

function Cards({ url }: { url: string }) {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add state for loading

  useEffect(() => {
    const fetchData = async (url: string) => {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY as string,
          "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST as string
        }
      };
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const data = await result.results;
        setBooks(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching (success or error)
      }
    };
    console.log("this runs");
    fetchData(url);
  }, []); // Dependency array for url

  return (
    <div className="flex flex-wrap space-x-8">
      {isLoading ? (
        <p>Loading Books...</p>
      ) : (
        books?.map((book: Book) => (
          <Card
            key={book.work_id}
            title={book.title}
            authors={book.authors}
            cover_url={
              book.published_works.length > 0
                ? book.published_works[0].cover_art_url
                : ""
            }
          />
        ))
      )}
    </div>
  );
}

export default Cards;
