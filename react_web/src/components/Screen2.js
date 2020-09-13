import React, { Component , useState } from 'react';
import { Container, ListGroup, ListGroupItem, Button, Alert } from 'reactstrap';
import './css/Screen2.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import makeAnimated from 'react-select/animated';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import BorderWrapper from 'react-border-wrapper'
import Select from 'react-select'
import {BsFillInfoCircleFill} from "react-icons/bs"
import {AiOutlineLeft} from "react-icons/ai"
import {IconContext} from "react-icons"
import CreatableSelect from 'react-select/creatable'
import history from './../history';


class Screen2 extends Component {

    constructor(props) {
        super();
        this.state = {
            setValidated: false,
            validated: false,
            phone:"",
            errors:{},
            visible: false,
            options : [
              { value: 'Country1', label: 'Country1' },
              { value: 'Country2', label: 'Country2' },
              { value: 'Country3', label: 'Country3' }
            ],
            visible2 : false,
            options2 : [
              { value: 'Country1', label: 'Country1' },
              { value: 'Country2', label: 'Country2' },
              { value: 'Country3', label: 'Country3' }
            ],
            options3 : [
              { value: 'Compliant', label: 'Compliant' },
              { value: 'Suggestion', label: 'Suggestion' }
            ]
        };


    }

    toggle = () => {this.setState({ visible: false });}

    show=()=>{
    	console.log("enter-----------------------")
    	this.setState({ visible: true });
    }

    toggle2 = () => {this.setState({ visible2: false });}

    show2=()=>{
    	console.log("enter-----------------------")
    	this.setState({ visible2: true });
    }

    back=()=>{
    	history.push('/');
    }

    summit=()=>{
    	history.push('/Screen3');
    }

    handleChange = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    };

    handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    };

render() {
  const animatedComponents = makeAnimated();

    return (

        <BorderWrapper style={{marginLeft:'25%'}} className="center">
        <Container className="center">


        <div className="row" >
        <div className="col">
        <div className="row" >


        <Button  color="dark"    onClick = {this.back}><h6>
        <IconContext.Provider value={{ style: {fontSize: '20px', color: 'while'}}}>
             <AiOutlineLeft/>
      </IconContext.Provider>
                  Back</h6>
        </Button>
        <div className="col">
        <h4 className="titles">Company Information</h4>
        </div>
        </div>

        <form>

        <div className="form-group">
            <div className="row">

                <div className="col">
                    <label htmlFor="inputName1">First Name</label>
                    <input type="text" className="form-control" id="inputName1" placeholder="First Name"
                        pattern="[a-z]+" required></input>
                    <span style={{color: "red"}} className="invalid-message" id="userName1">
                      {this.state.errors["userName1"]}
                    </span>
                </div>

                <div className="col">

    <label htmlFor="inputName2">Last Name</label>
<input type="text" className="form-control" id="inputName2" placeholder="Last Name"
pattern="[a-z]+" required></input>
<span style={{color: "red"}} className="invalid-message" id="userName2">
    {this.state.errors["userName2"]}
</span>
                </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Work Email Address</label>
          <input type="email" className="form-control" id="email" placeholder="Work Email Address"
           required></input>
          <span style={{color: "red"}} className="invalid-message" id="email">
              {this.state.errors["email"]}
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="inputPhone">Phone Number</label>
          <IntlTelInput
          containerClassName="intl-tel-input"
          inputClassName="form-control"

          inputPattern="[0-9]+"
          inputType="phone" className="form-control" id="phone"
          valueRequired
          />
          <span style={{color: "red"}} className="invalid-message" id="phone">
              {this.state.errors["phone"]}
          </span>
        </div>

        <div className="form-group">

          <label htmlFor="Operation">Operation countries </label>
              <div className="row">

                  <div className="col-8">
          <Select
          components={animatedComponents}
          className="form-control"
          placeholder="Operation countries"
          isMulti
          name="colors"
          options={this.state.options}
          className="basic-multi-select"
          classNamePrefix="select"
          required
          />
          </div>
          <div className="col">

            <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
                   <div>
                     <BsFillInfoCircleFill onClick = {this.show} />
                     <Alert color="info" isOpen={this.state.visible} toggle={this.toggle}>
                         You could select more than one country.
                   </Alert>
                   </div>
                </IconContext.Provider>
                </div>
                </div>

          <small className="form-text text-muted">
          Must be at least 6 characters long, contain letters and numbers</small>
          <span style={{color: "red"}} className="invalid-message" id="Operation">
          {this.state.errors["Operation"]}
          </span>
        </div>

        <div className="form-group">

          <label htmlFor="Operation"> Company Name </label>
              <div className="row">
                <div className="col-8">
          <Select
          components={animatedComponents}
          className="form-control"
          placeholder="Company Name"
          isMulti
          name="colors"
          options={this.state.options2}
          className="basic-multi-select"
          classNamePrefix="select"
          required
          />
          </div>
          <div className="col">

            <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>
                   <div>
                     <BsFillInfoCircleFill onClick = {this.show2} />
                     <Alert color="info" isOpen={this.state.visible2} toggle={this.toggle2}>
                         You could select/add your Company.
                   </Alert>
                   </div>
                </IconContext.Provider>
                </div>
                </div>

        </div>

        <div className="form-group">
          <label htmlFor="Operation"> Objective </label>
          <CreatableSelect
          isClearable
          components={animatedComponents}
          className="form-control"
          placeholder="Objective"
          isMulti
          name="colors"
          options={this.state.options3}
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          className="basic-multi-select"
          classNamePrefix="select"
          required
          />
        </div>

        <div className="form-group">
          <textarea className="form-control" id="Textarea1" placeholder="More Details Description" rows="5"></textarea>
        </div>

        <button className="btn btn-outline-dark float-right" type="submit" onClick={this.summit}>
          <i className="fa fa-sign-in"></i> Request an appointment</button>

      </form>
      </div>
      </div>
      </Container>
</BorderWrapper>
);
}
}

export default Screen2;
