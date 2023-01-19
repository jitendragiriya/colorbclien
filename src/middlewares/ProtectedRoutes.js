import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { TOKEN } from "../constants";
import { LOGIN } from "../constants/routes";
import { getLocalData } from "../hooks/localStorage";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const redirect = async () => {
    const token = await getLocalData(TOKEN);
    if (!token) {
      navigate(LOGIN);
    }
  };
  useEffect(() => {
    redirect();
  }, []);

  return <Outlet/>;
};

export default ProtectedRoutes;
