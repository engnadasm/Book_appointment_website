import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import './css/Screen1.css';

export default class Screen1 extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>A simple app showing react button click navigation</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Screen2')}>
            Click button to view Screen2</Button>
          </form>
        </div>
      </div>
    );
  }
}
