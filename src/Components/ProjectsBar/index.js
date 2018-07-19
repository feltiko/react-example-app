import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './styles.css';

function ProjectsBar({ projects }) {
  return (
    <ul className="projects">
      {projects.map(value => (
        <div className="projects__item" key={value.id} name={value.name}>
          {value.name.slice(0, 1)}
        </div>
      ))}
      <div className="projects__item projects__item--add">+</div>
    </ul>
  );
}

ProjectsBar.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(ProjectsBar);
