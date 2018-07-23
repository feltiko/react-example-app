import {
  PROJECTS_REQUEST,
  PROJECTS_SUCCEEDED,
  PROJECTS_FAILED,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_FAILED,
  ADD_PROJECT_SUCCEEDED,
  SET_SELECTED_PROJECT_ID,
} from '../../Constants/action-types';

import { PROJECTS as initialState } from '../../State';

const projects = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        data: null,
        error: false,
      };
    }
    case PROJECTS_SUCCEEDED: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: false,
      };
    }
    case PROJECTS_FAILED: {
      return {
        ...state,
        isLoading: false,
        data: null,
        error: true,
      };
    }
    case ADD_PROJECT_REQUEST: {
      return { ...state }; // TODO: is loading
    }
    case ADD_PROJECT_SUCCEEDED: {
      const name = action.payload;
      const id = state.data[state.data.length - 1].id + 1 || 0;
      const projectInstance = {
        id,
        name,
        tasks: [],
      };

      state.data.push(projectInstance);

      return {
        ...state,
        isLoading: false,
        data: state.data,
        error: false,
      };
    }
    case ADD_PROJECT_FAILED: {
      return { ...state }; // TODO: if adding is failed
    }
    case SET_SELECTED_PROJECT_ID: {
      console.log(action.payload);
      return { ...state, selected: action.payload };
    }
    default:
      return state;
  }
};

export default projects;
