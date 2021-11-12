import { Date, RichText } from "prismic-reactjs";
import { format } from "date-fns-tz";
import PropTypes from "prop-types";

const NewsItem = ({ content }) => {
  const date = Date(content.date);
  const formattedDate = format(date, "MMM dd, yyyy");

  return (
    <div className="flex text-white relative border-b border-white border-opacity-10 py-8">
      <div className="text-xs opacity-50 mr-10">{formattedDate}</div>
      <div className="underline">
        <RichText render={content.title} />
      </div>
    </div>
  );
};

NewsItem.propTypes = {
  content: PropTypes.shape({
    date: PropTypes.string,
    title: PropTypes.array,
  }).isRequired,
};

export default NewsItem;
