import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import MenuItem from '../MenuItem';
import './styles.css';

class Menu extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  go (event) {
    const { history } = this.props;

    history.push(`/${event}`);
  }

  render() {
    const { routes } = this.props;

    return (
      <ul className="menu">
        {
          routes.map(value => <MenuItem key={value.url} url={value.url} name={value.name} />)
        }
      </ul>
    );
  }
}

export default withRouter(Menu);
