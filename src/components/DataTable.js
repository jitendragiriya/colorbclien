import React from "react";
import OurPagination from "./OurPagination";

const DataTable = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  prepareRow,
  //pagination

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
  return (
    <>
      <div className="w-full relative md:px-4 mx-auto">
        <div className="w-full relative overflow-auto scroll-horizontal md:rounded-lg shadow">
          <table {...getTableProps()} className="w-full shadow">
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="py-3 px-3 min-w-[100%] text-left last:text-right font-semibold border-b border-b-gray-200 select-none text-sm text-[#33475b] whitespace-nowrap bg-white capitalize"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    {...row.getRowProps()}
                    className="bg-white border-b border-b-gray-200 b hover:bg-[#faf9f9]"
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className={`py-4 px-3 min-w-[100%] text-left last:text-right text-sm text-[#33475b] whitespace-nowrap font-sans`}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <OurPagination
            pageOptions={pageOptions}
            previousPage={previousPage}
            gotoPage={gotoPage}
            nextPage={nextPage}
            canPreviousPage={canPreviousPage}
            canNextPage={canNextPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
            pageCount={pageCount}
          />
        </div>
      </div>
    </>
  );
};

export default DataTable;
