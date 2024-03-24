function Card({
  title,
  authors,
  cover_url
}: {
  title: string;
  authors: string[];
  cover_url: string;
}) {
  const MAX_TITLE_LENGTH = 20;

  const truncatedTitle =
    title.length > MAX_TITLE_LENGTH
      ? title.slice(0, MAX_TITLE_LENGTH) + "..."
      : title;

  return (
    <div className="flex flex-col justify-start items-start space-x-4">
      <img
        src={cover_url}
        alt={title}
        className="h-[14rem] w-[10rem] rounded-lg"
      />
      <p className="text-md text-blue-900">{truncatedTitle}</p>
      <p className="text-xs">{authors}</p>
    </div>
  );
}

export default Card;
