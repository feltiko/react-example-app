import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './styles.css';

class MenuItem extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  };

  go = (url) => {
    const { history } = this.props;

    history.push(`${url}`);
  }

  render() {
    const { url, name } = this.props;

    return (
      <li className="menu-item">
        <button
          type="button"
          className="menu-item__link"
          onClick={() => this.go(url)}
        >
          {name}
        </button>
      </li>
    );
  }
}

export default withRouter(MenuItem);
