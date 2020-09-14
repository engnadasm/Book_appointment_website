import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import Routes from './Routes'

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <Routes />
    </div>
    </Provider>
    );
  }
}

export default App;
