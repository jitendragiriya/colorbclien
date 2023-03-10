import React from "react";

const Loading = ({ text }) => {
  return (
    <div
      className={`h-full w-full flex items-center justify-center bg-transparent my-0 z-50`}
    >
      <div
        className={`${
          text ? "h-5 w-5 border-[3px]" : "h-7 w-7 border-4"
        } rounded-full  border-white border-t-[#ffffff23] animate-spin relative`}
      ></div>
      {text ? (
        <div className="text-white font-semibold capitalize ml-4">{text}</div>
      ) : null}
    </div>
  );
};

export default Loading;
