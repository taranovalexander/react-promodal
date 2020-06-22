import React from 'react';
import { createModal } from 'promodal';

class Modal extends React.Component {
  state = {
    name: '',
    email: '',
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };
  render () {
    const { submit, cancel } = this.props;
    const { name, email } = this.state;
    return (
      <div
        style={{
          border: '1px solid #bebebe',
          marginBottom: '20px',
          padding: '10px',
        }}
      >
        <h3>Modal content</h3>
        <input onChange={this.onChange} type="text" name="name" placeholder="name" />
        <input onChange={this.onChange} type="text" name="email" placeholder="email" />
        <button onClick={() => submit({ name, email })}>Submit</button>
        <button onClick={cancel}>Cancel</button>
      </div>
    );
  }
};

export default createModal(Modal);
