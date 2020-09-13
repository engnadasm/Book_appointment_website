import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import Screen2 from './components/Screen2'
import Routes from './Routes'

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes />
    </div>
  );
}

export default App;
