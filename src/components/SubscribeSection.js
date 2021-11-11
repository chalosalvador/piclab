import React from "react";
import RequestBetaInput from "./RequestBetaInput";

const SubscribeSection = () => {
  return (
    <div className="bg-section5 bg-cover flex flex-col h-footer items-center justify-center pt-20 relative">
      <div className="text-white text-xl text-center w-full sm:w-2/3 md:w-1/3 px-6 mb-10">
        Let’s get started lorem ipsum with{" "}
        <span className="font-semibold">PicLab</span>
      </div>

      <RequestBetaInput />
    </div>
  );
};

export default SubscribeSection;
