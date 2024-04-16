import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getAuthenticatedUser from "../hooks/getAuthenticatedUser";
import { useGetUserData } from "../hooks/useGetRole";
import { useTitle } from "../hooks/useTitle";

const AuthGuard = ({ accessibleRoles, title, children }) => {
  useTitle(`${title}`);
  const { authData } = useSelector((state) => state?.Auth);
  const navigate = useNavigate();

  const authenticatedUser = getAuthenticatedUser(authData);
  const { currentRole } = useGetUserData(authData);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!authenticatedUser || token === null) {
      navigate("/login");
      return;
    }
  }, [authenticatedUser, token]);

  const checkRoles = (roles) => {
    if (roles.includes(currentRole)) {
      return true;
    }
  };

  if (!checkRoles(accessibleRoles)) {
    return <h1>You do not have permission to access this page</h1>;
  }
  return children;
};

export default AuthGuard;
