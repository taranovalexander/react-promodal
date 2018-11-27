import React from 'react';
import ModalGenerator from './ModalGenerator';

const modal = {};

const ModalContainer = () => (
  <ModalGenerator ref={(node) => { modal.node = node; }} />
);

// function to create new promise based modal
const createModal = (Component, options) => props => modal.node.create(Component, options)(props);

export { ModalContainer, createModal };
