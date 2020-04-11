import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const PING_SERVER = "PING_SERVER";

export const loginUser = ({ email, password, isAdmin }) => async dispatch => {
  const { data } = await axios.post("http://localhost:3000/api/v1/signin", {
    email,
    password,
    isAdmin
  });
  dispatch({ type: LOGIN_USER, data });
};

export const pingServer = () => async dispatch => {
  console.log("pinging");
  const { data } = await axios.get("http://localhost:3000/");
  console.log(data);
  dispatch({ type: PING_SERVER, data });
};
