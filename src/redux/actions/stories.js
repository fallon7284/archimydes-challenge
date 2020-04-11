import axios from "axios";

export const FETCH_STORIES = "FETCH_STORIES";
export const FETCH_STORY_BY_ID = "FETCH_STORY_BY_ID";
export const CREATE_STORY = "CREATE_STORY";
export const UPDATE_STORY_STATUS = "UPDATE_STORY_STATUS";
export const SET_SELECTED_STORY = "SET_SELECTED_STORY";

export const fetchStories = user => async dispatch => {
  const authOptions = {
    method: "GET",
    url: "http://localhost:3000/api/v1/stories",
    headers: { authorization: user.token },
    user: user
  };
  const { data } = await axios(authOptions);
  dispatch({ type: FETCH_STORIES, data });
};

export const fetchStoryById = (id, user) => async dispatch => {
  const authOptions = {
    method: "GET",
    url: "http://localhost:3000/api/v1/stories/" + id,
    headers: { authorization: user.token },
    user: user
  };
  const { data } = await axios(authOptions);
  dispatch({ type: FETCH_STORY_BY_ID, data });
};

export const createStory = (story, user) => {
  console.log(story, user);
  return async dispatch => {
    const authOptions = {
      method: "POST",
      url: "http://localhost:3000/api/v1/stories",
      headers: { authorization: user.token },
      user,
      data: story
    };
    const { data } = await axios(authOptions);
    dispatch({ type: CREATE_STORY, data });
    return true;
  };
};

export const updateStoryStatus = (id, status) => ({
  type: UPDATE_STORY_STATUS,
  id,
  status
});

export const setSelectedStory = story => ({
  type: SET_SELECTED_STORY,
  story
});
