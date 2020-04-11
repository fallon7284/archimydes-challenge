import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

const PrivateRoute = ({ path, component: Component, user, exact }) => {
  return exact ? (
    <Route
      exact
      path={path}
      component={() => {
        return user.token ? <Component /> : <Login />;
      }}
    />
  ) : (
    <Route
      path={path}
      component={() => {
        return user.token ? <Component /> : <Login />;
      }}
    />
  );
};

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState)(PrivateRoute);
