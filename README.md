# Promise modal (promodal)

This is React wrapper for your modal dialogs to use them like promises. You can use any UI library what you like.
It's really convenient to create modals especially confirmation modals

## Installation

Yarn:
```bash
yarn add promodal
```

npm:
```bash
npm install --save promodal
```

## Example

1) Insert container for your modals into you app

```javascript
import React from "react";
import { ModalContainer } from "promodal";

class App extends React.Component {
  render () {
    return (
        <div>
            <ModalContainer />
            ...
        </div>
    );
  }
};
```

2) Then create modal and wrap it with 'createModal'. Now you have promise function that invoke your modal dialog

```javascript
import React from 'react';
import { createModal } from 'promodal';

class Modal extends React.Component {
  render () {
    const { submit, cancel } = this.props;
    return (
      <div>
        Modal content
        <button onClick={() => submit("Hello I'm resolved!")}>Submit</button>
        <button onClick={() => cancel("Do'h!")}>Cancel</button>
      </div>
  );
  }
};

export default createModal(Modal, options);
```

You can pass `options` like second argument, but it's not necessary;
This `options` can contains the following properties:
- `parentNode` is any valid DOM node where modal window should be located, by default it will be `<ModalContainer/>` component location

3) Now you can import your promise-based modal and invoke it

```javascript
import React from "react";
import modal from "./modal";

class Component extends React.Component {
  showModal = () => {
    modal().then((data) => {
        console.log(data); // Hello I'm resolved!
    }, (data) => {
        console.log(data); // Do'h!
    });
  };
  render () {
    return (
        <div>
            <button onClick={this.showModal}>Show modal</button>
        </div>
    );
  }
};

export default createModal(Modal);
```

