import Image from "next/image";
import shape from "../../public/images/shape-section2.png";
import ai from "../../public/images/ai-icon.png";
import Tag from "./Tag";

const AiSection = () => {
  return (
    <div className="flex flex-col items-end justify-center w-full bg-section2 bg-center bg-cover overflow-hidden relative py-36">
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

      <div className="bg-white p-10 w-80 rounded-lg shadow-2xl relative mx-auto sm:mr-24">
        <div className="text-gray-400 text-tiny mb-3">
          Artificial Intelligence
        </div>
        <div className="text-black-400 text-lg">
          Let <span className="text-red">A.I.</span> handle lorem ipsum dolor
          sit.
        </div>
        <div className="text-center my-14">
          <Image src={ai} alt="AI" width={103} height={89} />
        </div>

        <div className="text-tiny text-gray-400">
          <span className="font-bold">No more need to</span> lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.
        </div>
      </div>
    </div>
  );
};

export default AiSection;
