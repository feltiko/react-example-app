import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Popover, Tooltip } from 'antd';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import AddProjectPopover from '../AddProjectPopover';
import { setSelectedProjectId } from '../../Actions/Projects';
import './styles.css';

class ProjectsBar extends Component {
  constructor (props) {
    super(props);

    this.handleSelectProjectClick = this.handleSelectProjectClick.bind(this);
  }

  handleSelectProjectClick = (id) => {
    const { dispatch } = this.props;

    setSelectedProjectId(dispatch, id);
  };

  render () {
    const { projects } = this.props;

    return (
      <ul className="projects">
        {projects.map(value => (
          <Tooltip placement="right" key={value.id + value.name} title={value.name}>
            <button type="button" onClick={() => this.handleSelectProjectClick(value.id)} className="projects__item" name={value.name}>
              {value.name.slice(0, 1)}
            </button>
          </Tooltip>
        ))}
        <Popover placement="right" content={<AddProjectPopover />} title="Add new project" trigger="click">
          <div className="projects__item projects__item--add">+</div>
        </Popover>
      </ul>
    );
  }
}

ProjectsBar.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ projectsRedux: state.projects });

export default connect(mapStateToProps)(withRouter(ProjectsBar));
