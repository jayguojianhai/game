import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
  renderSquare(i) {
    return <Square
      key={i}
      value={this.props.squares[i]}
      onClick={() => this.props.onClick(i)}
    />
  }
  render() {
    const arr = Array(3).fill(null);
    const dom = arr.map((o, i) => <div key={i} className="board-row">
      {arr.map((o, j) => {
        const index = j + i * arr.length;
        return this.renderSquare(index);
      })}
    </div>);
    return (
      <div>
        {dom}
      </div>
    );
  }
}

export default Board;
