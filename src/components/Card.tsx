import { Link } from "react-router-dom";

function Card() {
  const name = "the final empire";

  return (
    <div className="h-[16rem] w-[10rem]">
      <Link to={`books/${name}`}>
        <div className="p-2 hover:bg-blue-100 rounded-xl border-blue-400 hover:border-2">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://books.google.co.ve/books/publisher/content?id=xKk4AwAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U1VEl36I200TBcyiqXBjSP1_VSBIg&w=1280"
              alt="book cover"
              className="h-[14rem] w-[9rem] rounded-lg"
            />
            <p>{name}</p>
            <p>Author name</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
