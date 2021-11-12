import React from "react";
import { RichText } from "prismic-reactjs";
import RequestBetaInput from "../../components/RequestBetaInput";
import PropTypes from "prop-types";

const SubscribeSection = ({ slice }) => (
  <section className="bg-section5 bg-cover flex flex-col h-footer items-center justify-center pt-20 relative">
    <div className="text-white text-xl text-center w-full sm:w-2/3 md:w-1/3 px-6 mb-10">
      <RichText render={slice.primary.title} />
    </div>

    <RequestBetaInput />
  </section>
);

SubscribeSection.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};

export default SubscribeSection;
