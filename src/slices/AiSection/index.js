import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import shape from "/public/images/shape-section2.png";
import Tag from "components/Tag";
import { imagePropType } from "utils/propTypes";
import { calc, parallaxValues, setTranslation } from "utils/parallaxHelpers";

const trans1 = setTranslation(20, -50);
const trans2 = setTranslation(-25, 10);
const trans3 = setTranslation(30, -15);
const trans4 = setTranslation(40, 40);

const AiSection = ({ slice }) => {
  const [props, set] = useSpring(parallaxValues);

  return (
    <section className="flex flex-col items-end justify-center w-full bg-section2 bg-center bg-cover overflow-hidden relative py-36">
      <div
        className="absolute w-full flex h-full"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className="absolute top-40 -left-44"
          //eslint-disable-next-line react/prop-types
          style={{ transform: props.xy.to(trans4) }}
        >
          <Image src={shape} alt="PICLAB" width={1160} height={1112} />
        </animated.div>

        <Tag
          text="Person"
          className="top-2/4 left-2/4"
          //eslint-disable-next-line react/prop-types
          transform={props.xy.to(trans1)}
        />
        <Tag
          text="Pencils"
          className="top-1/3 left-1/3"
          //eslint-disable-next-line react/prop-types
          transform={props.xy.to(trans2)}
        />
        <Tag
          text="Desk"
          className="top-2/4 left-32"
          //eslint-disable-next-line react/prop-types
          transform={props.xy.to(trans4)}
        />
        <Tag
          text="Person"
          className="top-3/4 left-28"
          //eslint-disable-next-line react/prop-types
          transform={props.xy.to(trans1)}
        />
        <Tag
          text="Scenery"
          className="top-3/4 left-96"
          //eslint-disable-next-line react/prop-types
          transform={props.xy.to(trans3)}
        />
        <Tag
          text="Pencils"
          className="top-2/4 -left-10"
          //eslint-disable-next-line react/prop-types
          transform={props.xy.to(trans2)}
        />
      </div>

      <div className="bg-white p-10 w-72 sm:w-80 rounded-lg shadow-2xl relative mx-auto sm:mr-24">
        <div className="text-gray-400 text-sm mb-3">
          <RichText render={slice.primary.category} />
        </div>
        <div className="card-title">
          <RichText render={slice.primary.title} />
        </div>

        <div className="text-center my-14">
          <Image
            src={slice.primary.image.url}
            alt={slice.primary.title}
            width={slice.primary.image.dimensions.width}
            height={slice.primary.image.dimensions.height}
          />
        </div>

        <div className="text-sm text-gray-400">
          <RichText render={slice.primary.description} />
        </div>
      </div>
    </section>
  );
};

AiSection.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      category: PropTypes.array,
      title: PropTypes.array,
      description: PropTypes.array,
      image: imagePropType,
    }),
  }),
};

export default AiSection;
