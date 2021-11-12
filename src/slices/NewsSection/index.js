import React from "react";
import { RichText } from "prismic-reactjs";
import NewsItem from "components/NewsItem";
import Image from "next/image";
import shape from "/public/images/shape-section2.png";
import PropTypes from "prop-types";
// import { calc, parallaxValues, setTranslation } from "utils/parallaxHelpers";
// import { useSpring, animated } from "react-spring";

// const trans1 = setTranslation(40, -10);

const NewsSection = ({ slice }) => {
  // const [props, set] = useSpring(parallaxValues);

  return (
    <section
      className="flex pt-20 text-white before:bg-section2 before:bg-center before:bg-cover before:absolute before:w-full
      before:h-full before:transform before:rotate-180 before:z-0 overflow-hidden relative py-36 -mt-44"
    >
      <div className="padded-content relative z-40">
        <div className="relative pt-52 mb-14 text-xl">
          <RichText render={slice.primary.title} />
        </div>

        <div className="w-full h-56 overflow-auto">
          {slice.items.map((item) => (
            <NewsItem
              key={item.date[0].text + item.title[0].text}
              content={item}
            />
          ))}
        </div>
      </div>

      <div
        className="absolute w-full flex h-full"
        // onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <div
          className="will-change-transform absolute top-44 -right-96 xl:-right-60 rotate-125 opacity-20 md:opacity-100 z-10"
          //eslint-disable-next-line react/prop-types
          // style={{ transform: props.xy.to(trans1) }}
        >
          <Image src={shape} alt="PICLAB" width={1160} height={1112} />
        </div>

        <div
          className="hidden md:block"
          //eslint-disable-next-line react/prop-types
          // style={{ transform: props.xy.to(trans2) }}
        >
          <div className="logo-stick-left" />
          <div className="logo-stick-middle" />
          <div className="logo-stick-right" />
        </div>
      </div>
    </section>
  );
};

NewsSection.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      title: PropTypes.array,
    }),
    items: PropTypes.array,
  }),
};

export default NewsSection;
