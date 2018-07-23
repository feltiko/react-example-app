import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Button } from 'antd';
import TaskItem from '../TaskItem';
import AddTaskModal from '../AddTaskModal';
import './styles.css';

class Tasks extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  state = {
    isVisible: false,
  }

  handleOpenModalClick = () => {
    this.setState({ isVisible: true });
  }

  handleCloseModalClick = () => {
    this.setState({ isVisible: false });
  }

  render() {
    const { tasks } = this.props;
    const { isVisible } = this.state;

    return (
      <ul className="tasks">
        <li className="task-item__heading">
          <h3 className="tasks__header">Tasks</h3>
          <Button onClick={this.handleOpenModalClick} type="primary">Add new task</Button>
          <AddTaskModal closeModal={this.handleCloseModalClick} isVisible={isVisible} />
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
      </ul>
    );
  }
}

export default withRouter(Tasks);
