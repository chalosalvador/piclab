import Image from "next/image";
import RequestBetaInput from "./RequestBetaInput";
import logo from "/public/images/logo-color.png";
import React from "react";

const AppBar = () => {
  return (
    <div className="flex bg-white rounded-md w-appbar fixed bottom-4 z-40 py-2 px-4 md:px-2 left-1/2 transform -translate-x-1/2 drop-shadow-lg justify-between">
      <div className="hidden md:flex w-1/2 md:w-1/3">
        <RequestBetaInput />
      </div>
      <div className="flex items-center md:justify-center w-1/3">
        <Image src={logo} width={106} height={35.72} alt="PICLAB" />
      </div>

      <div className="flex justify-end w-1/3">
        <button className="button">
          <i className="fas fa-sign-in fa-lg mr-2" />
          Sign In
        </button>
      </div>
    </div>
  );
};

export default AppBar;
