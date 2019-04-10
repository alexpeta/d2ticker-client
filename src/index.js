import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Button } from './components/button';
import { ListView } from './components/listview';

const contacts = [
  { value: 1, display: 'Leanne Graham' },
  { value: 2, display: 'Ervin Howell' },
  { value: 3, display: 'Clementine Bauch' },
  { value: 4, display: 'Patricia Lebsack' }
];

class MainApp extends React.Component {
  render() {
    return (
      <div className="main-content">
        <ListView items={contacts} />
        <Button />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<MainApp />, document.getElementById('root'));
