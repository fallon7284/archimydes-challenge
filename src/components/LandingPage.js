import React from "react";
import { connect } from "react-redux";
import StoryList from "./StoryList";
import CreateStory from "./CreateStory";

const LandingPage = ({ user }) => {
  switch (user.role) {
    case "Admin": {
      return <StoryList />;
    }
    default: {
      return <CreateStory />;
    }
  }
};

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState)(LandingPage);
