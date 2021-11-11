import Image from "next/image";

const Card = ({ content }) => {
  return (
    <div className="bg-white w-4/5 sm:w-card mr-2 rounded-lg relative flex-shrink-0 last:mr-0">
      <div className="p-4 md:pt-10 md:pl-10 md:pr-40 h-210">
        <div className="text-gray-400 text-sm mb-3">{content.category}</div>
        <div className="text-black-400 text-lg mb-5 line-clamp-2">
          {content.title}
        </div>

        <div className="text-sm text-gray-400 line-clamp-3">{content.text}</div>
      </div>

      <div className="text-center mt-14 px-2">
        <Image src={content.image} alt="AI" width={771} height={420} />
      </div>
    </div>
  );
};

export default Card;
