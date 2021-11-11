import React from "react";

const RequestBetaInput = () => {
  return (
    <div className="flex items-center bg-white rounded-md border border-gray-200 h-12 pl-3 sm:pl-5 py-3">
      <i className="far fa-envelope text-gray-500 pr-3 pt-1" />
      <input
        type="email"
        placeholder="Enter email"
        className="text-sm focus-visible:outline-none placeholder-gray-500 h-full sm:w-52"
      />
      <button className="text-red font-semibold text-sm h-full px-3 sm:px-5 border-l border-gray-400">
        Request Beta
      </button>
    </div>
  );
};

export default RequestBetaInput;
