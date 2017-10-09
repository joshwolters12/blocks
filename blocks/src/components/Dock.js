import React, { Component } from 'react';
import Slot from './Slot.js';
import Block from './Block.js';

class Dock extends Component {
  render() {
    return (
      <div className="dock">
        <div className="dock_container" id="dock1">
          <Block />
        </div>
        <div className="dock_container" id="dock2">
          <Block />
        </div>
        <div className="dock_container" id="dock3">
          <Block />
        </div>
      </div>
    );
  }
}

export default Dock;
