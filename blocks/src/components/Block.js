import React, { Component } from 'react';
import Slot from './Slot.js'

class Block extends Component {
  render() {
    return (
      <div className="block">
        {this.props.value}
        <div className="row_container">
          <Slot /><Slot /><Slot />
        </div>
        <div className="row_container">
          <Slot /><Slot /><Slot />
        </div>
        <div className="row_container">
          <Slot /><Slot /><Slot />
        </div>
      </div>
    );
  }
}

export default Block;
