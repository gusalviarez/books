function Card({
  title,
  authors,
  cover_url
}: {
  title: string;
  authors: string[];
  cover_url: string;
}) {
  return (
    <div className="flex space-x-4">
      <img
        src={cover_url}
        alt={title}
        className="h-[10rem] w-[7rem] rounded-lg"
      />
      <div>
        <h2 className="text-xl">{title}</h2>
        <p>{authors}</p>
      </div>
    </div>
  );
}

export default Card;
