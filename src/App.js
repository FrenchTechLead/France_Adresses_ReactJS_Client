import React from 'react';
import logo from './img/logo.svg';
import SearchBar from './componenets/search-bar';
import './css/app.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
          <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Saisissez une adresse</h2>
            <SearchBar/>
          </div>

          <div id="list_container">

          </div>
          <div id="modal"></div>
      </div>
    );
  }
}
