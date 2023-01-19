import React from "react";
import MetaData from "../utils/MetaData";

const NotFound404 = () => {
  return (
    <>
      <MetaData title={"stay safe 404"} />
      <div className="flex min-h-vh w-full items-center justify-center text-2xl bg-white text-gray-700 dark:bg-black">
        There's nothing here: 404!
      </div>
    </>
  );
};

export default NotFound404;
