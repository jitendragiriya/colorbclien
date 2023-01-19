import React, { useState } from "react";

const style =
  "h-8 w-12 rounded my-0 mx-1 flex items-center justify-center bg-[#00000015] text-black cursor-pointer capitalize select-none";

const OurPagination = ({
  pageOptions,
  previousPage,
  gotoPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  pageSize,
  setPageSize,
  pageCount,
}) => {
  const [pageIndex, setPageIndex] = useState(1);

  //increase page index / goto previous page
  const increasePageIndex = () => {
    setPageIndex(pageIndex + 1);
    nextPage();
  };

  //descrease page index / goto next page
  const decreasePageIndex = () => {
    setPageIndex(pageIndex - 1);
    previousPage();
  };

  // goto page index / direct jump to page index
  const jumpToPage = (index) => {
    gotoPage(index);
  };

  return (
    <div className="sticky left-0 flex items-center justify-between flex-wrap bg-white w-full pl-3 md:rounded-b-md">
      {pageOptions && pageOptions.length > 1 ? (
        <div className="relative flex items-center justify-start flex-wrap ">
          <button
            onClick={decreasePageIndex}
            disabled={!canPreviousPage}
            className={`${style} ${!canPreviousPage && "cursor-not-allowed"}`}
          >
            {"prev"}
          </button>
          <button
            onClick={() => jumpToPage(0)}
            disabled={!canPreviousPage}
            className={style}
          >
            {"1"}
          </button>
          <button className={style}>...</button>
          <button
            onClick={() => jumpToPage(pageCount - 1)}
            disabled={!canNextPage}
            className={style}
          >
            {pageCount}
          </button>
          <button
            onClick={increasePageIndex}
            disabled={!canNextPage}
            className={`${style} ${!canNextPage && "cursor-not-allowed"}`}
          >
            {"next"}
          </button>
        </div>
      ) : (
        <div></div>
      )}

      <div className="border border-gray-200 rounded overflow-hidden m-4 select-none">
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="p-1 text-base"
        >
          {[5, 10, 25, 50, 100].map((element) => (
            <option
              key={element}
              value={element}
              className="bg-white p-1 relative text-sm"
            >
              show {element}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default OurPagination;
