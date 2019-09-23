import React from 'react';
import SearchBar from './SearchBar.js';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <main className="formContainer">
        <SearchBar />
      </main>
    );
  }
}

export default App;
