/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { resetUserInfo } from "../store/userSlice";
import { clearToken } from "../utils/Token";

const Header = ({ setSearchResults }) => {
  // State and Hooks
  // const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.user.userInfo);
  const validToken = window.localStorage.getItem("userInfo");
  const isLoggedIn = !!validToken;

  // const [searchTerm, setSearchTerm] = useState("");
  const apiBaseDomain = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  // const location = useLocation();

  // Handlers

  const handleSearch = (searchTerm) => {
    fetch(`${apiBaseDomain}/books/book/search?title=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.data.books);
      })
      .catch((error) => {
        console.error("Error searching for books:", error);
      });
  };

  // useEffect(() => {
  //   handleSearch(searchTerm);
  // }, [searchTerm]);

  // const handleChange = (e) => {
  //   // Update the searchTerm state when the user types in the input field
  //   setSearchTerm(e.target.value);
  // };

  function logout() {
    fetch(`${apiBaseDomain}/users/logout`, {
      credentials: "include",
      method: "POST",
    }).then(() => {
      // Dispatch the resetUserInfo action to clear the user state
      // dispatch(resetUserInfo());
      clearToken();

      navigate("/signin"); // Navigate to the signin page after logout
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
                  src="https://microsite.hcltech.com/manufacturing/imro/img/avatar.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            </Link>
            <div className="ml-2">
              <button onClick={logout} className="text-gray-600 font-semibold">
                Log out
              </button>
            </div>
          </div>
        )}
        {!isLoggedIn && (
          <div className="ml-2">
            <Link to="/signup" className="text-gray-600 font-semibold">
              Sign Up
            </Link>
            <span className="mx-1">|</span>
            <Link to="/signin" className="text-gray-600 font-semibold">
              Sign In
            </Link>
          </div>
        )}
      </div>
      {/* Responsive Search Input (conditionally rendered) */}
      {/* {location.pathname === "/" && (
        <div className="mt-3 md:flex md:items-center md:justify-center">
          <input
            type="text"
            placeholder="Search books..."
            className="w-full md:w-64 bg-gray-200 border border-gray-300 rounded-full pl-6 pr-4 py-2 focus:outline-none focus:bg-white text-black"
            value={searchTerm}
            onChange={handleChange}
          />
        </div>
      )} */}
    </header>
  );
};

Header.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default Header;
