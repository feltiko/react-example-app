import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import TaskItem from '../TaskItem';
import './styles.css';

function Tasks({ tasks }) {
  return (
    <ul className="tasks">
      <li className="task-item__heading">
        <h3 className="tasks__header">Tasks</h3>
        <Button type="primary">Add new task</Button>
      </li>
      {tasks.length && tasks.map(value => (
        <TaskItem
          className="task-item"
          id={value.id}
          key={value.id}
          priority={value.priority}
          date={value.date}
          title={value.title}
        />
      ))}
      <div className="task-item task-item--add">+</div>
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(Tasks);
