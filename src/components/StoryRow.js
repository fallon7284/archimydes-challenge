import React, { useState } from "react";
import "./StoryTable.css";
import { connect } from "react-redux";
import { setSelectedStory } from "../redux/actions/stories";
import { useHistory } from "react-router-dom";

const StoryRow = ({ story, setSelectedStory, user }) => {
  const history = useHistory();
  const color = story.status
    ? story.status === "accepted"
      ? "green"
      : "red"
    : "";
  return (
    <tr
      key={story.id}
      className={"row"}
      style={{ color }}
      onClick={() => {
        if (user.role === "user") {
          return;
        }
        setSelectedStory(story);
        history.push("/stories/" + story.id);
      }}
    >
      <td>{story.id}</td>
      <td>{story.createdBy}</td>
      <td>{story.summary}</td>
      <td>{story.description}</td>
      <td>{story.type}</td>
      <td>{story.complexity}</td>
      <td>{story.estimatedHrs}</td>
      <td>{story.cost}</td>
    </tr>
  );
};

const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    setSelectedStory: story => dispatch(setSelectedStory(story))
  };
};

export default connect(
  mapState,
  mapDispatch
)(StoryRow);
