import React, { Component } from 'react';
import Row from './Row.js'

class Board extends Component {
  render() {
    return (
      <div className="board_container">
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
      </div>
    );
  }
}

export default Board;
