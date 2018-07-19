import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import TaskItem from '../TaskItem';
import './styles.css';

function Tasks({ tasks }) {
  return (
    <ul className="tasks">
      {tasks.map(value => (
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
