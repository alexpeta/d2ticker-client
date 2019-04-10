import React from 'react';
import ReactDOM from 'react-dom';

export class ListItem extends React.Component {
  render() {
    return (
      <div className="list-item">
        <span>{this.props.display}</span>
      </div>
    );
  }
}
