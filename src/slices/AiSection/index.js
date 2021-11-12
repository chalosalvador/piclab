import React from "react";
import { RichText } from "prismic-reactjs";
import Image from "next/image";
import shape from "/public/images/shape-section2.png";
import Tag from "components/Tag";
import PropTypes from "prop-types";
import { imagePropType } from "../../../utils/propTypes";

const AiSection = ({ slice }) => (
  <section className="flex flex-col items-end justify-center w-full bg-section2 bg-center bg-cover overflow-hidden relative py-36">
    <div>
      <div className="absolute top-40 -left-44">
        <Image src={shape} alt="PICLAB" width={1160} height={1112} />
      </div>
      <Tag text="Person" className="top-2/4 left-2/4" />
      <Tag text="Pencils" className="top-1/3 left-1/3" />
      <Tag text="Desk" className="top-2/4 left-32" />
      <Tag text="Person" className="top-3/4 left-28" />
      <Tag text="Scenery" className="top-3/4 left-96" />
      <Tag text="Pencils" className="top-2/4 -left-10" />
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
