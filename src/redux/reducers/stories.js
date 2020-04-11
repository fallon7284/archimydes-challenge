import {
  CREATE_STORY,
  FETCH_STORY_BY_ID,
  FETCH_STORIES,
  UPDATE_STORY_STATUS,
  SET_SELECTED_STORY
} from "../actions/stories";

const defaultState = {
  all: [],
  selected: {},
  byUserId: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_STORY: {
      return {
        ...state,
        all: [...state.all, action.data]
      };
    }
    case FETCH_STORIES: {
      return {
        ...state,
        all: action.data
      };
    }
    case FETCH_STORY_BY_ID: {
      return {
        ...state,
        selected: action.data
      };
    }
    case UPDATE_STORY_STATUS: {
      const storyToUpdate = state.all.find(story => story.id === action.id);
      storyToUpdate.status = action.status;
      return {
        ...state
      };
    }
    case SET_SELECTED_STORY: {
      return {
        ...state,
        selected: action.story
      };
    }
    default: {
      return state;
    }
  }
};
