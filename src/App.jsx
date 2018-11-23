import React, { Component } from 'react';
import MenuBar from './components/menuBar.jsx';
import MainContent from './mainContent.jsx'

class App extends Component {
  render() {
    return (
      <div>
      <MenuBar/>
      <MainContent/>
      </div>
    );
  }
}

export default App;
