import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './styles.css';

class TaskItem extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    priority: PropTypes.number.isRequired,
  };

  go(id) {
    const { history } = this.props;

    history.push(`/projects/${id}`);
  }

  render() {
    const {
      id, title, date, priority,
    } = this.props;

    return (
      <li className={`task-item--priority-${priority} task-item`}>
        <h4 className="task-item__title">
          <span>#{id}</span> / {title}
        </h4>
        <span className="task-item__date">{date}</span>
      </li>
    );
  }
}

export default withRouter(TaskItem);
