import React from 'react';
import ReactDOM from 'react-dom';
import './listview.css';
import { ListItem } from './listitem';

export class ListView extends React.Component {
  render() {
    return (
      <div className="list-container">
        {this.props.items.map(c => (
          <ListItem value={c.value} display={c.display} />
        ))}
      </div>
    );
  }
}
