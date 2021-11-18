import axios from "axios";
export const loginUser = async ({ email, password }) => {
  const login = await axios
    .post("http://localhost:1337/auth/local", {
      identifier: email,
      password,
    })
    .catch(err => console.log(err));
  return login;
};
