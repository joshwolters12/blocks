import React, { Component } from 'react';
import Slot from './Slot.js';


class Row extends Component {
  render() {
    return (
      <div className="row_container">
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
        <Slot />
      </div>
    );
  }
}

export default Row;
