import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllIngredient } from "../actions/getData";
import PageLoader from "../components/PageLoader";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import DataTable from "../components/DataTable";
import { getLocalData } from "../hooks/localStorage";
import { ID } from "../constants";

const Ingredients = () => {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const { ingredients, loading } = useSelector((state) => state.Ingredient);
  const getId = async()=>{
    const id = await getLocalData(ID);
    if(id) dispatch(getAllIngredient(id));
  }
  useEffect(() => {getId()
  }, []);

  useEffect(() => {
    if (ingredients && ingredients.length) {
      let arr = [];
      //modifying the fields for showing in table
      ingredients?.map((data) => {
        arr.push({
          id: data.id,
          items: data.items,
          amount: data.amount,
          unit: data.unit,
          recipe_id:data.recipe_id
        });
      });
      setDatas(arr);
    }
  }, [ingredients]);

  const data = useMemo(() => [...datas], [datas]);
  const columns = useMemo(
    () =>
      datas[0]
        ? Object.keys(datas[datas.length - 1]).map((key) => {
            return { Header: key, accessor: key };
          })
        : [],
    [datas]
  );

  const initialState = {
    hiddenColumns: "",
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageSize },
  } = useTable(
    { columns, data, initialState },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
        <div className="table-page">
      {loading ? (
        <PageLoader />
      ) : (
        <>
          {datas.length ? (
            <DataTable
              getTableProps={getTableProps}
              getTableBodyProps={getTableBodyProps}
              headerGroups={headerGroups}
              page={page}
              prepareRow={prepareRow}
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
          ) : null}
        </>
      )}
      </div>
    </>
  );
};

export default Ingredients