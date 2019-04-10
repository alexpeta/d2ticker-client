import React from 'react';
import ReactDOM from 'react-dom';
import { ListItem } from './listitem';
import './listview.css';

export class ListView extends React.Component {
  render() {
    return (
      <div className="list-container">
        {this.props.items.map(c => (
          <ListItem key={c.value} display={c.display} />
        ))}
      </div>
    );
  }
}
