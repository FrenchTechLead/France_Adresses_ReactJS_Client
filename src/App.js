import React from 'react';
import SearchBar from './componenets/search-bar';
import './css/app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
              <SearchBar/>
          </div>

          <div id="list_container">

          </div>
          <div id="modal"></div>
      </div>
    );
  }
}