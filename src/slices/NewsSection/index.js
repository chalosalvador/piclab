import React from "react";
import { RichText } from "prismic-reactjs";
import NewsItem from "components/NewsItem";
import Image from "next/image";
import shape from "/public/images/shape-section2.png";
import PropTypes from "prop-types";

const NewsSection = ({ slice }) => (
  <section
    className="pt-20 text-white before:bg-section2 before:bg-center before:bg-cover before:absolute before:w-full
      before:h-full before:transform before:rotate-180 before:z-0 overflow-hidden relative py-36 -mt-44"
  >
    <div className="padded-content">
      <div className="relative pt-52 mb-14 text-xl">
        <RichText render={slice.primary.title} />
      </div>

      <div className="w-full sm:w-2/5 h-56 overflow-auto">
        {slice.items.map((item) => (
          <NewsItem
            key={item.date[0].text + item.title[0].text}
            content={item}
          />
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
  </section>
);

NewsSection.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: PropTypes.array,
    }),
    items: PropTypes.array,
  }),
};

export default NewsSection;
