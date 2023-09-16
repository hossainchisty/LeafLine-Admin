import { useEffect } from "react";
import getToken from "./Token";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/signin");
  }, [token, navigate]);

  return children;
};

export default PrivateRoute;
