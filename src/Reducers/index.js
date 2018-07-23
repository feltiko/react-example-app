import { combineReducers } from 'redux';

import ProjectsReducer from './Projects';

const AppReducer = combineReducers({
  projects: ProjectsReducer,
});

export default AppReducer;
