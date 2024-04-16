import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useTokenVerification = () => {
  const [isValidUser, setIsValidUser] = useState(false);
  const { authData } = useSelector((state) => state?.Auth);
  const token = localStorage.getItem("token");

  useEffect(() => {
    authData?.token == token ? setIsValidUser(true) : setIsValidUser(false);
  }, []);

  return isValidUser;
};

export default useTokenVerification;
