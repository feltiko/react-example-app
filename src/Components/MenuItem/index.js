import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './styles.css';

class MenuItem extends Component {
  go (event) {
    const { history } = this.props;

    history.push(`/${event}`);
  }

  render() {
    const { url, name } = this.props;

    return (
      <li className="menu-item">
        <a className="menu-item__link" href={url}>
          {name}
        </a>
      </li>
    );
  }
}

MenuItem.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withRouter(MenuItem);
