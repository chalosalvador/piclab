import NewsItem from "./NewsItem";
import Image from "next/image";
import shape from "../../public/images/shape-section2.png";

const news = [
  {
    date: "JUL 18,2021",
    title: "PicLab generates $1 billion in revenue.",
    url: "http://localhost:3000",
  },
  {
    date: "JUL 23,2021",
    title: "PicLab generates an additional $2 billion in revenue.",
    url: "http://localhost:3000",
  },
];

const NewsSection = () => {
  return (
    <div
      className="pt-20 text-white before:bg-section2 before:bg-center before:bg-cover before:absolute before:w-full
      before:h-full before:transform before:rotate-180 before:z-0 overflow-hidden relative py-36 -mt-44"
    >
      <div className="padded-content">
        <div className="relative pt-52 mb-14 text-xl">
          <span className="font-semibold">News</span> lorem at PicLab
        </div>

        <div className="w-full sm:w-96">
          {news.map((item) => (
            <NewsItem key={item.title} content={item} />
          ))}
        </div>
      </div>

      <div className="absolute top-80 -right-96 xl:-right-60 rotate-125 opacity-20 md:opacity-100 z-10">
        <Image src={shape} alt="PICLAB" width={1160} height={1112} />
      </div>

      <div className="hidden md:block">
        <div className="logo-stick-left" />
        <div className="logo-stick-middle" />
        <div className="logo-stick-right" />
      </div>
    </div>
  );
};

export default NewsSection;
