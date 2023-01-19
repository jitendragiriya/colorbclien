import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MetaData from "../utils/MetaData";
import Loading from "../components/Loading";
import { HOME_PAGE } from "../constants/routes";
import { auth, login } from "../actions/auth";
import { clearError } from "../actions/getData";
import { setLocalData } from "../hooks/localStorage";
import { TOKEN } from "../constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, loading, error } = useSelector((state) => state.Login);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [user_id, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const showPassword = () => {
    setShow(!show);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !user_id || !password) {
      setErrors("All fields are required!")
      return;
    }
    setErrors("")
    const formData = {
      name,
      user_id,
      password,
    };

    dispatch(login(formData));
  };

  useEffect(() => {
    if (token && token.length) {
      setLocalData(TOKEN, token)
      dispatch(auth())
      navigate(HOME_PAGE);}
  }, [token]);

  useEffect(() => {
    if (error) {
      setErrors(error);
      dispatch(clearError());
    }
  }, [error]);

  return (
    <>
      <MetaData title={"login"} />
      <div className="w-full bg-[#f9f9f9] dark:bg-[#181818]">
        <div className="w-[500px] max-w-full mx-auto px-4 py-8 sm:py-12">
          <div className="p-4 w-full flex flex-col shadow-lg rounded bg-white dark:bg-[#383838] sm:p-8">
            <div className="w-full mb-8">
              <h1 className="text-2xl font-medium mb-2">Sign in</h1>
              <p className="text-sm">Stay updated on your professional world</p>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              {errors ? <p className="text-sm font-semibolds mb-5 text-red-500">{errors}</p> : null}
              <div className="w-full mb-6 relative sm:mb-8">
                <input
                  type="text"
                  onChange={(e) => setUserId(e.target.value)}
                  value={user_id}
                  placeholder="user id"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
              </div>
              <div className="w-full mb-6 relative sm:mb-8">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="name"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
              </div>
              <div className="w-full mb-6 relative flex flex-col items-end sm:mb-8">
                <input
                  type={show ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  className="w-full outline-none border border-gray-300 dark:border-[#484848] p-2 focus:border-black dark:bg-[#282828] dark:focus:border-white"
                />
                <span
                  className={
                    show
                      ? "border mt-2 w-fit px-4 py-1 border-gray-300 dark:border-[#585858]  sm:mt-4 select-none cursor-pointer bg-orange-500 text-white"
                      : "border mt-2 w-fit px-4 py-1 border-gray-300 dark:border-[#585858]  sm:mt-4 select-none cursor-pointer"
                  }
                  onClick={showPassword}
                >
                  show
                </span>
              </div>

              <button className="w-full text-center h-10 p-2 bg-orange-500 text-white select-none cursor-pointer">
                {loading ? <Loading /> : <>Login</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
