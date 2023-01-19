import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./actions/auth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  HOME_PAGE,
  LOGIN,
  PATH_INGREDIENT,
  PATH_PROCESS,
} from "./constants/routes";
import ProtectedRoutes from "./middlewares/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound404 from "./pages/NotFound404";
import store from "./store";
import Ingredients from "./pages/Ingredients";
import Process from "./pages/Process";

const App = () => {
  useEffect(() => {
    store.dispatch(auth());
  }, []);

  return (
    <div className="bg-[#f7f7f7] text-[#383838] duration-75">
      <Router>
        <Navbar/>
        <Routes>
          
          <Route path={LOGIN} element={<Login />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path={HOME_PAGE} element={<Home />} />
            <Route path={PATH_INGREDIENT} element={<Ingredients />} />
            <Route path={PATH_PROCESS} element={<Process />} />
          </Route>
          <Route path={"*"} element={<NotFound404 />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
