import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, Select } from 'antd';
import './styles.css';

const { Option } = Select;
const { TextArea } = Input;

class AddTaskModal extends Component {
  static propTypes = {
    isVisible: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  handleInputChange = text => (e) => {
    console.log(text, e);
  };

  handleClose = (createTask) => {
    const { closeModal } = this.props;

    if (createTask) {
      console.log('...create task');
    }

    closeModal();
  }


  render() {
    const { isVisible } = this.props;

    return (
      <Modal
        visible={isVisible}
        onOk={() => this.handleClose(true)}
        onCancel={() => this.handleClose(false)}
      >
        <div className="add-task__form">
          <h2>Add a new task</h2>
          <Input className="add-task__input" placeholder="Task name" />
          <Select placeholder="Select a priority for new task" className="add-task__input add-task__input--select">
            <Option value="3">High priority</Option>
            <Option value="2">Medium priority</Option>
            <Option value="1">Low priority</Option>
          </Select>
          <TextArea rows={4} className="add-task__input" placeholder="Task description" />
        </div>
      </Modal>
    );
  }
}

export default AddTaskModal;
