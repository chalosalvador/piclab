import Link from "next/link";

const NewsItem = ({ content }) => {
  return (
    <div className="flex text-white relative border-b border-white border-opacity-10 py-8">
      <div className="text-xs opacity-50 mr-10">{content.date}</div>
      <div className="underline">
        <Link href={content.url}>{content.title}</Link>
      </div>
    </div>
  );
};

export default NewsItem;
