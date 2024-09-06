import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const VerifyUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isVerified, setisVerified] = useState(false);

  useEffect(() => {
    const handle = async () => {
      try {
        const params = new URLSearchParams(location.search);
        const token = params.get("token");
        const response = await axios.post(
          `http://localhost:3003/verify?token=${token}`
        );

        if (response.data.success) {
          setisVerified(true);
        }

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    handle();
  }, []);

  return (
    <>
      <div>
        {isVerified ? (
          <h1>Your email has been verified</h1>
        ) : (
          <h1>Verifying your email...</h1>
        )}
      </div>
    </>
  );
};

export default VerifyUser;
