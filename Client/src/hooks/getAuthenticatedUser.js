const getAuthenticatedUser = (authData) => {
  const token = localStorage.getItem("token");
  const userToken = authData?.token;

  if (userToken !== null && token === userToken) {
    return userToken;
  } else {
    return null;
  }
};

export default getAuthenticatedUser;
