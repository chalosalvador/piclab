import PropTypes from "prop-types";
import { animated } from "react-spring";

const Tag = ({ text, className, transform }) => {
  return (
    <animated.div
      className={`will-change-transform text-white border-white border rounded-full px-3 backdrop-filter backdrop-blur absolute before:content-['#'] before:mr-2 before:opacity-50 ${className}`}
      style={{ transform }}
    >
      {text}
    </animated.div>
  );
};

Tag.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  transform: PropTypes.any,
};

export default Tag;
