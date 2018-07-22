import React, { Component } from 'react';
import { Button, Input } from 'antd';
import './styles.css';

class AddProjectPopover extends Component {
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
    // const { name } = this.state;
    // TOOD: add new project
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

export default AddProjectPopover;
