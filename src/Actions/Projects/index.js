import {
  PROJECTS_REQUEST,
  PROJECTS_SUCCEEDED,
  PROJECTS_FAILED,
  ADD_PROJECT_FAILED,
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCEEDED,
  SET_SELECTED_PROJECT_ID,
} from '../../Constants/action-types';

import fakeData from '../../data';

const requestProjects = () => ({ type: PROJECTS_REQUEST });
const requestProjectsSuccess = data => ({ type: PROJECTS_SUCCEEDED, payload: data });
const requestProjectsFail = () => ({ type: PROJECTS_FAILED });

const requestAddProject = () => ({ type: ADD_PROJECT_REQUEST });
const requestAddProjectSuccess = data => ({ type: ADD_PROJECT_SUCCEEDED, payload: data });
const requestAddProjectFail = () => ({ type: ADD_PROJECT_FAILED });

/**
 * Setting a selected project ID
 * @param {function} dispatch
 * @param {Number} id
 */
const setSelectedProjectId = (dispatch, id) =>
  dispatch({ type: SET_SELECTED_PROJECT_ID, payload: id });

/**
 * Loading projects from database
 * @param {Object} dispatch redux object from `this.props` of component
 */
const fetchProjects = (dispatch) => {
  dispatch(requestProjects());

  return new Promise((resolve) => {
    dispatch(requestProjectsSuccess(fakeData.projects));

    resolve();
  }).catch((error) => {
    dispatch(requestProjectsFail(error));
  });
};

/**
 * Add a new project
 * @param {Object} dispatch redux object from `this.props` of component
 */
const addProject = (dispatch, data) => {
  dispatch(requestAddProject());

  return new Promise((resolve) => {
    dispatch(requestAddProjectSuccess(data));

    resolve();
  }).catch((error) => {
    dispatch(requestAddProjectFail(error));
  });
};

export { fetchProjects, addProject, setSelectedProjectId };
