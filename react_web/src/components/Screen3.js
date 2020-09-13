import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import './css/Screen1.css';

export default class Screen3 extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Screen3</h1>
          <p>Your request is received and someone will be
          in touch with you soon</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/')}>
            Click button to view Screen1</Button>
          </form>
        </div>
      </div>
    );
  }
}
