import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import { fetchProjects } from '../../Actions/Projects';
import ProjectsBar from '../../Components/ProjectsBar';
import Tasks from '../../Components/Tasks';
import './styles.css';

class Homepage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  };

  componentDidMount () {
    const { dispatch } = this.props;

    fetchProjects(dispatch);
  }

  render () {
    const { projects: { data, selected } } = this.props;

    const isLoadedNotEmpty = data && data.length;

    const projectsBar = isLoadedNotEmpty
      ? <ProjectsBar projects={data} /> : null;

    const selectedProjectTasks = isLoadedNotEmpty
      ? data.filter(val => val.id === selected)[0].tasks : null;

    const projectsTasks = isLoadedNotEmpty
      ? <Tasks tasks={selectedProjectTasks} /> : null;

    return (
      <Row className="layout">
        <Col className="sidebar" span={6}>
          {projectsBar}
          {projectsTasks}
        </Col>
        <Col className="content" span={18}>col-18 col-push-6</Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({ projects: state.projects });

export default connect(mapStateToProps)(Homepage);
