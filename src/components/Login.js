import React, { useState } from "react";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/user";
import "./Login.css";

const Login = ({ loginUser, history }) => {
  console.log(history);
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    isAdmin: false
  });

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login-form">
      <div className="title">Login</div>
      <input
        name="email"
        value={formState.email}
        placeholder="Email"
        onChange={handleChange}
      ></input>
      <input
        name="password"
        value={formState.password}
        placeholder="Password"
        onChange={handleChange}
      ></input>
      <div>
        <label>Admin user?</label>
        <select
          id="admin-select"
          name="isAdmin"
          value={formState.isAdmin}
          onChange={handleChange}
        >
          <option value={true}>Admin</option>
          <option value={false}>User</option>
        </select>
      </div>
      <button onClick={() => loginUser(formState)}>Login</button>
    </div>
  );
};

const mapDispatch = dispatch => {
  return {
    loginUser: form => dispatch(loginUser(form))
  };
};

export default connect(
  null,
  mapDispatch
)(Login);
