import axios from "axios";

export const registerUser = async ({ email, username, password }) => {
  const register = await axios
    .post("http://localhost:1337/auth/local/register", {
      email,
      username,
      password,
    })
    .catch(err => console.log(err));
  return register;
};
