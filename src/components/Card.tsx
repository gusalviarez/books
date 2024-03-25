function Card({
  title,
  authors,
  cover_url
}: {
  title: string;
  authors: string[];
  cover_url: string;
}) {
  const MAX_TITLE_LENGTH = 17;

  const truncatedTitle =
    title.length > MAX_TITLE_LENGTH
      ? title.slice(0, MAX_TITLE_LENGTH) + "..."
      : title;

  return (
    <div className="flex flex-col space-x-4">
      <img
        src={cover_url}
        alt={title}
        className="h-[16rem] w-[10rem] rounded-lg"
      />
      <span className="text-md text-blue-900">{truncatedTitle}</span>
      <span className="text-xs">{authors}</span>
    </div>
  );
}

export default Card;
