import bcrypt from "bcryptjs";

export const hashPassword = async (salt, password) => {
  const saltAmount = await bcrypt.genSalt(salt);
  const secretPassword = await bcrypt.hash(password, saltAmount);
  return secretPassword;
};
