/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { clearToken } from "../../utils/Token";

const Header = () => {
  // State and Hooks
  const validToken = window.localStorage.getItem("userInfo");
  const isLoggedIn = !!validToken;
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  function logout() {
    fetch(`${apiBaseDomain}/users/logout`, {
      method: "POST",
    }).then(() => {
      clearToken();
      navigate("/signin");
    });
  }

  return (
    <header className="p-4 bg-white text-black">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-book-4573596-3802605.png"
            alt="LeafLink Logo"
            className="h-9 w-9"
          />
          <Link to="/" className="text-3xl font-extrabold ml-2">
            LeafLine
          </Link>
        </div>
        {isLoggedIn && (
          <div className="flex items-center space-x-2">
            <Link to="/profile">
              <div className="relative">
                <img
                  src="https://avatars.githubusercontent.com/u/62835101?v=4"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </Link>
            <div className="ml-2">
              <button
                onClick={logout}
                className="text-white bg-orange-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 m-2 mr-2 focus:outline-none "
              >
                Log out
              </button>
            </div>
          </div>
        )}
        {!isLoggedIn && (
          <div className="ml-2">
            <Link
              to="/signup"
              className="m-2 py-2 px-4 rounded-md duration-200 border-b border-gray-100 hover:bg-gray-100 text-black"
            >
              Sign Up
            </Link>

            <Link
              to="/signin"
              className="m-2 py-2 px-4 rounded-md duration-200 border-b border-gray-100 hover:bg-gray-100 text-black"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
