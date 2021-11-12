import React from "react";
import { RichText } from "prismic-reactjs";
import Card from "../../components/Card";
import PropTypes from "prop-types";

const CardsSection = ({ slice }) => (
  <section className="flex flex-col items-center pt-20 relative z-10">
    <div className="w-full sm:w-2/3 md:w-1/3 px-6 text-lg sm:text-xl text-white text-center">
      <RichText render={slice.primary.title} />
    </div>

    <div className="scroll-x no-scrollbar mt-20 padded-content">
      {slice.items.map((card) => (
        <Card key={card.title[0].text + card.image.url} content={card} />
      ))}
    </div>
  </section>
);

CardsSection.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: PropTypes.array,
    }),
    items: PropTypes.array,
  }),
};

export default CardsSection;
