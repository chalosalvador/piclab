import PropTypes from "prop-types";

export const imagePropType = PropTypes.shape({
  url: PropTypes.string,
  dimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
});
