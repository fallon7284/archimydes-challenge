import React from "react";
import { connect } from "react-redux";
import { updateStoryStatus } from "../redux/actions/stories";
import { useHistory } from "react-router-dom";

const StoryDetail = ({ story, updateStoryStatus }) => {
  const history = useHistory();
  return (
    <div>
      <div>{`Summary:  ${story.summary}`}</div>
      <div>{`Description:  ${story.description}`}</div>
      <div>{`Type:  ${story.type}`}</div>
      <div>{`Complexity:  ${story.complexity}`}</div>
      <div>{`Estimated time for completion:  ${story.estimatedHrs}`}</div>
      <div>{`Cost:  ${story.cost}`}</div>
      {story.status && <div>{`Status: ${story.status}`}</div>}
      <button
        style={{ backgroundColor: "green" }}
        onClick={() => {
          updateStoryStatus(story.id, "accepted");
          history.push("/stories");
        }}
      >
        Accept
      </button>
      <button
        style={{ backgroundColor: "red" }}
        onClick={() => {
          updateStoryStatus(story.id, "rejected");
          history.push("/stories");
        }}
      >
        Reject
      </button>
    </div>
  );
};

const mapState = state => {
  return {
    story: state.stories.selected
  };
};

const mapDispatch = dispatch => {
  return {
    updateStoryStatus: (id, status) => {
      dispatch(updateStoryStatus(id, status));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(StoryDetail);
