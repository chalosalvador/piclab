import Image from "next/image";
import bgHero from "/public/images/bg-hero.png";
import logo from "/public/images/logo-piclab.png";

const Hero = () => {
  return (
    <div className="flex h-hero relative">
      <div className="padded-content-l pt-8 pb-28 w-full sm:w-2/4 md:w-1/3 absolute sm:relative z-10 flex flex-col justify-between h-full">
        <div className="sticky top-5">
          <Image src={logo} width={118} height={39.76} alt="PICLAB" />
        </div>
        <div>
          <span className="px-2 py-1 font-medium rounded-md border font-idlewild text-tiny text-green border-green">
            Coming summer 2021
          </span>

          <div className="text-white text-xl mt-4">
            Powerful image <br />{" "}
            <span className="font-semibold">asset management</span>
            <br /> for everyone.
          </div>
        </div>

        <div className="text-white text-xs text-opacity-70 border-l-2 border-white px-4 md:pl-8">
          <span className="font-semibold text-white text-opacity-100">
            Organize, transform, & serve
          </span>{" "}
          your entire photo library. The perfect image management app for
          freelancers, organizations, & web developers.
        </div>
      </div>

      <div className="w-full sm:w-2/4 md:2/3 relative opacity-10 sm:opacity-100">
        <div className="absolute overflow-y-hidden h-full">
          <Image
            src={bgHero}
            width={1252}
            height={695}
            layout="fixed"
            alt="PICLAB"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
