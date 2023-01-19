import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipe } from "../actions/getData";
import PageLoader from "../components/PageLoader";
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
} from "react-table";
import DataTable from "../components/DataTable";
import { setLocalData } from "../hooks/localStorage";
import { useNavigate } from "react-router-dom";
import { PATH_INGREDIENT, PATH_PROCESS } from "../constants/routes";
import { ID } from "../constants";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([]);
  const { recipies, loading } = useSelector((state) => state.Recipe);
  const { user } = useSelector((state) => state.Auth);
  useEffect(() => {
    if (user && user.id && !datas.length) dispatch(getAllRecipe(user.id));
  }, [user]);

  useEffect(() => {
    if (recipies && recipies.length) {
      let arr = [];
      //modifying the fields for showing in table
      recipies?.map((data) => {
        arr.push({
          id: data.id,
          name: data.name,
          desc: data.desc,
          image_url: data.image_url,
          _id: data.id,
        });
      });
      setDatas(arr);
    }
  }, [recipies]);

  //set id & reirect to ingredients
  const gotoIngredients = (id) => {
    if (id) {
      setLocalData(ID, id);
      navigate(PATH_INGREDIENT);
    }
  };

  //set id & redirect to process
  const gotoProcess = (id) => {
    if (id) {
      setLocalData(ID, id);
      navigate(PATH_PROCESS);
    }
  };

  const data = useMemo(() => [...datas], [datas]);
  const columns = useMemo(
    () =>
      datas[0]
        ? Object.keys(datas[datas.length - 1]).map((key) => {
            // modifiying the fields
            if (key === "_id")
              return {
                Header: "...",
                accessor: key,
                Cell: ({ value }) => (
                  <>
                    <button
                      className="capitalize font-semibold text-sm bg-blue-400 rounded-sm px-2 text-white"
                      onClick={() => gotoIngredients(value)}
                    >
                      Ingredients
                    </button>
                    <button
                      className="capitalize font-semibold text-sm bg-green-400 rounded-sm px-2 text-white ml-2"
                      onClick={() => gotoProcess(value)}
                    >
                      Process
                    </button>
                  </>
                ),
              };
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

export default Home;
