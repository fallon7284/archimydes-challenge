import React, { useState } from "react";
import { connect } from "react-redux";
import { createStory } from "../redux/actions/stories";
import ErrorModal from "./ErrorModal";
import { useHistory } from "react-router-dom";
import "./CreateStory.css";

const CreateStory = ({ createStory, user }) => {
  const history = useHistory();
  const [storyForm, setStoryForm] = useState({
    summary: "",
    description: "",
    type: "enhancement",
    complexity: "low",
    estimatedHrs: "",
    cost: ""
  });
  const [err, setErr] = useState(null);
  const [validForm, setValidForm] = useState(true);
  const handleChange = e => {
    setStoryForm({
      ...storyForm,
      [e.target.name]: e.target.value
    });
  };
  const validate = () => {
    const { summary, description, estimatedHrs, cost } = storyForm;
    console.log(Number(estimatedHrs), Number(cost), err);
    return (
      summary.length > 0 &&
      description.length > 0 &&
      !isNaN(Number(estimatedHrs)) &&
      !isNaN(Number(cost))
    );
  };
  const handleSubmit = () => {
    if (validate(storyForm)) {
      createStory(storyForm, user).then(history.push("/stories"));
    } else {
      let { summary, description, estimatedHrs, cost } = storyForm;
      let message = [];
      if (summary.length < 1) message.push("You need a summary!");
      if (description.length < 1) message.push("You need a description!");
      if (isNaN(Number(estimatedHrs)))
        message.push("Estimated Hours has to be a number!");
      if (isNaN(Number(cost))) message.push("Cost has to be a number!");
      setErr(message.join(" "));
    }
  };
  return (
    <div className="story-form">
      {err && <ErrorModal message={err} close={() => setErr(null)} />}
      <input
        name="summary"
        value={storyForm.summary}
        onChange={handleChange}
        placeholder="Summary"
      />
      <textarea
        rows={3}
        name="description"
        value={storyForm.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <div>
        Type:
        <select name="type" onChange={handleChange} value={storyForm.type}>
          <option value="enhancement">Enhancement</option>
          <option value="bugfix">Bugfix</option>
          <option value="development">Development</option>
          <option value="qa">QA</option>
        </select>
      </div>
      <div>
        Complexity:
        <select
          name="complexity"
          value={storyForm.complexity}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>
      </div>
      <input
        name="estimatedHrs"
        placeholder="Estimated Hours"
        value={storyForm.estimatedHrs}
        onChange={handleChange}
      ></input>
      <input
        name="cost"
        placeholder="Cost"
        value={storyForm.cost}
        onChange={handleChange}
      ></input>
      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

const mapState = state => {
  return {
    user: state.user
  };
};

const mapDispatch = dispatch => {
  return {
    createStory: (story, user) => dispatch(createStory(story, user))
  };
};

export default connect(
  mapState,
  mapDispatch
)(CreateStory);
