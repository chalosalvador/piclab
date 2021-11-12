import { RichText } from "prismic-reactjs";
import Image from "next/image";
import PropTypes from "prop-types";
import { imagePropType } from "../../utils/propTypes";

const HeroContent = ({ slice }) => {
  return (
    <section className="flex h-hero relative">
      <div className="padded-content-l pt-8 pb-28 w-full sm:w-2/4 md:w-1/3 absolute sm:relative z-10 flex flex-col justify-between h-full">
        <div>
          <Image
            src={slice.primary.logo.url}
            width={slice.primary.logo.dimensions.width}
            height={slice.primary.logo.dimensions.height}
            alt="PICLAB"
          />
        </div>

        <div>
          <div className="w-max px-2 py-1 font-medium rounded-md border font-idlewild text-tiny text-green border-green">
            <RichText render={slice.primary.tag} />
          </div>

          <div className="hero-title">
            <RichText render={slice.primary.title} />
          </div>
        </div>

        <div className="hero-text">
          <RichText render={slice.primary.legend} />
        </div>
      </div>

      <div className="w-full sm:w-2/4 md:2/3 relative opacity-10 sm:opacity-100">
        <div className="absolute overflow-y-hidden h-full">
          <Image
            src={slice.primary.bgHero.url}
            width={slice.primary.bgHero.dimensions.width}
            height={slice.primary.bgHero.dimensions.height}
            layout="fixed"
            alt="PICLAB"
            priority
          />
        </div>
      </div>
    </section>
  );
};

HeroContent.propTypes = {
  slice: PropTypes.shape({
    primary: PropTypes.shape({
      logo: imagePropType,
      tag: PropTypes.array,
      title: PropTypes.array,
      legend: PropTypes.array,
      bgHero: imagePropType,
    }),
  }),
};

export default HeroContent;
