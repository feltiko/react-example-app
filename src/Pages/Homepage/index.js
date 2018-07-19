import React from 'react';
import { Row, Col } from 'antd';
import ProjectsBar from '../../Components/ProjectsBar';
import Tasks from '../../Components/Tasks';
import './styles.css';

function Homepage() {
  return (
    <Row className="layout">
      <Col className="sidebar" span={6}>
        <ProjectsBar projects={[
          { id: 1, name: 'test' },
          { id: 2, name: 'test' },
          { id: 3, name: 'test' },
        ]}
        />
        <Tasks tasks={[
          {
            id: 1, title: 'test', priority: 1, date: Date.now(),
          },
          {
            id: 2, title: 'baldej', priority: 2, date: Date.now(),
          },
          {
            id: 3, title: 'Title test', priority: 3, date: Date.now(),
          },
        ]}
        />
      </Col>
      <Col className="content" span={18}>col-18 col-push-6</Col>
    </Row>
  );
}

export default Homepage;
