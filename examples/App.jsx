import React from "react";
import { ModalContainer } from '../src';
import Modal from './Modal';

export default class App extends React.Component {
  showModal = () => {
    Modal().then((data) => {
      alert(JSON.stringify(data, null, 2));
    }, () => {
      alert('rejected');
    });
  };
  render () {
    return (
      <div>
        <ModalContainer />
        <p>Click button and create new modal</p>
        <button onClick={this.showModal}>Show modal</button>
      </div>
    );
  }
};
