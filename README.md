# Promise modal (promodal)

This is React wrapper for your modal dialogs to use them like promises. You can use any UI library what you like.
It's really convenient to create modals especially confirmation modals

## Installation

Yarn:
```bash
yarn add react-promodal
```

npm:
```bash
npm install --save react-promodal
```

## Example

1) Insert container for your modals into you app

```javascript
import React from "react";
import ProModal from "react-promodal";

class Application extends React.Component {
  render () {
    return (
        <div>
            <ProModal />
            ...
        </div>
    );
  }
};
```

2) Then create modal and wrap it with 'createModal'. Now you have promise function that invoke your modal dialog

```javascript
import React from "react";
import ProModal from "react-promodal";
import { createModal } from "react-promodal";

class Modal extends React.Component {
  render () {
    return (
        const { submit, cancel } = this.props;
        <div>
            Modal content
            <button onClick={submit}>Submit</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    );
  }
};

export default createModal(Modal, options);
```

You can pass `options` like second argument, but it's not necessary;
This `options` can contains the following properties:
- `parentNode` is any valid DOM node where modal window should be located, by default it will be <ProModal/> component location

3) Now you can import your promise-based modal and invoke it

```javascript
import React from "react";
import modal from "./modal";

class Component extends React.Component {
  showModal = () => {
    modal().then(() => {
        console.log('resolved');
    }, () => {
        console.log('rejected');
    });
  }  
  render () {
    return (
        <div>
            <button onClick={showModal}>Show modal</button>
        </div>
    );
  }
};

export default createModal(Modal);
```

