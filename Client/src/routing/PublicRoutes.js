import { useTitle } from "../hooks/useTitle";
import getAuthenticatedUser from "../hooks/getAuthenticatedUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PublicRoutes = ({ children, title }) => {
  useTitle(title);

  const { authData } = useSelector((state) => state?.Auth);

  const navigate = useNavigate();
  const authenticatedUser = getAuthenticatedUser(authData);

  useEffect(() => {
    if (authenticatedUser) {
      navigate("/");
      return;
    }
  }, [authenticatedUser]);

  return children;
};

export default PublicRoutes;
