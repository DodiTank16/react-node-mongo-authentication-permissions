export const useGetUserData = (authData) => {
  const currentRole = authData?.user?.role;

  const userToken = authData?.token;

  return { currentRole, userToken };
};
