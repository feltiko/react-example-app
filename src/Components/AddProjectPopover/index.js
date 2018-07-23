import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { connect } from 'react-redux';
import { addProject } from '../../Actions/Projects';
import './styles.css';

class AddProjectPopover extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.onNameInputChange = this.onNameInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameInputChange = e => this.setState({ name: e.target.value });

  onSubmit = () => {
    const { dispatch } = this.props;
    const { name } = this.state;

    addProject(dispatch, name);
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <Input placeholder="Name of the new project" value={name} onChange={this.onNameInputChange} />
        <Button onClick={this.onSubmit} type="primary" className="add-project__button">
          Add
        </Button>
      </div>
    );
  }
}

export default connect()(AddProjectPopover);
