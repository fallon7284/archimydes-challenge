import { LOGIN_USER, PING_SERVER } from "../actions/user";

const defaultState = {
  firstName: "",
  lastName: "",
  id: null,
  token: null,
  role: ""
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        ...state,
        ...action.data
      };
    }
    case PING_SERVER: {
      return {
        ...state,
        ...action.data
      };
    }
    default: {
      return state;
    }
  }
};
