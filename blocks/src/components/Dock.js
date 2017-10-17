import React, { Component } from 'react';
import Block from './Block.js';

class Dock extends Component {
  render() {
    return (
      <div className="dock">
        <div className="dock_container" id="dock1">
          <Block 
            checkBlockFit={this.props.checkBlockFit}
          />
        </div>
        <div className="dock_container" id="dock2">
          <Block 
            checkBlockFit={this.props.checkBlockFit}
          />
        </div>
        <div className="dock_container" id="dock3">
          <Block 
            checkBlockFit={this.props.checkBlockFit}
          />
        </div>
      </div>
    );
  }
}

export default Dock;
