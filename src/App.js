import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import { loginUser, pingServer } from "./redux/actions/user";
import { fetchStories } from "./redux/actions/stories";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import StoryDetail from "./components/StoryDetail";
import StoryList from "./components/StoryList";
import { useHistory } from "react-router-dom";

function App({ fetchStories, user, match }) {
  // const history = useHistory();
  useEffect(() => {
    if (user.token) {
      fetchStories(user);
    }
  }, [user]);
  return !user.token ? (
    <Login />
  ) : (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/stories" component={StoryList} />
      <Route path="/stories/:id" component={StoryDetail}></Route>
    </Router>
  );
}

const mapState = state => {
  return {
    user: state.user,
    stories: state.stories
  };
};

const mapDispatch = dispatch => {
  return {
    loginUser: params => dispatch(loginUser(params)),
    fetchStories: user => dispatch(fetchStories(user)),
    pingServer: () => dispatch(pingServer())
  };
};

export default connect(
  mapState,
  mapDispatch
)(App);
