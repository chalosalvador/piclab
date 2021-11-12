import Image from "next/image";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";

const Card = ({ content }) => {
  return (
    <div className="bg-white w-4/5 sm:w-card mr-2 rounded-lg relative flex-shrink-0 last:mr-0">
      <div className="p-4 md:pt-10 md:pl-10 md:pr-40 h-210">
        <div className="text-gray-400 text-sm mb-3">
          <RichText render={content.category} />
        </div>
        <div className="card-title mb-5 line-clamp-2">
          <RichText render={content.title} />
        </div>

        <div className="text-sm text-gray-400 line-clamp-3">
          <RichText render={content.description} />
        </div>
      </div>

      <div className="text-center mt-14 px-2">
        <Image
          src={content.image.url}
          alt="AI"
          width={content.image.dimensions.width}
          height={content.image.dimensions.height}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  content: PropTypes.shape({
    category: PropTypes.array,
    title: PropTypes.array,
    description: PropTypes.array,
    image: PropTypes.shape({
      url: PropTypes.string,
      dimensions: PropTypes.shape({
        width: PropTypes.number,
        height: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default Card;
