import React, { Component  } from 'react';
import { Container, Button, Alert } from 'reactstrap';
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import './css/Screen2.css';
import 'react-phone-number-input/style.css';
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

import { connect } from 'react-redux';
import { addRequest } from '../actions/requestAction';

class Screen2 extends Component {

    state = {
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
            ],
            isDisabled: true,
            firstName: '',
            lastName: '',
            workEmail: '',
            phoneNumber: '',
            selectedOption1: null,
            selectedOption2: null,
            selectedOption3: null,
            details: ''
        };

    toggle = () => {this.setState({ visible: false });}

    show=()=>{
    	this.setState({ visible: true });
    }

    toggle2 = () => {this.setState({ visible2: false });}

    show2=()=>{
    	this.setState({ visible2: true });
    }

    back=()=>{
    	history.push('/');
    }

    onChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    handlePhoneChange = (value, country, event, formattedValue) => {
      this.setState({ phoneNumber : country });
   };

    onSubmit = e => {
      e.preventDefault();

      const newRequest = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        workEmail: this.state.workEmail,
        phoneNumber: this.state.phoneNumber,
        country: this.state.selectedOption1,
        company:  this.state.selectedOption2,
        objective: this.state.selectedOption3,
        details: this.state.details
      };

      // Add Request via addRequest action
      this.props.addRequest(newRequest);

      // Close modal
      this.toggle();
      history.push('/Screen3');

    };

    handleChange1 = selectedOption1 => {
        this.setState({ isDisabled : false });
        if(selectedOption1 === null){
          this.setState({ isDisabled : true });
          this.setState({ selectedOption2 : null });
        }else {
        if(selectedOption1.length === 1){
          if(selectedOption1[0].value === "Country1"){
            this.setState({options2 : [
            { value: 'Country1', label: 'Country1' },
            { value: 'Country2', label: 'Country2' }
          ]});}

          else{
            this.setState({options2 : [
            { value: 'Country3', label: 'Country3' }
          ]});}
        }
        if(selectedOption1.length === 2 && (selectedOption1[0].value === "Country1"
        ||selectedOption1[1].value === "Country1")){
          this.setState({options2 : [
            { value: 'Country1', label: 'Country1' },
            { value: 'Country2', label: 'Country2' },
            { value: 'Country3', label: 'Country3' }
            ]});
        }

        if(selectedOption1.length === 3 && (selectedOption1[0].value === "Country1"
        ||selectedOption1[1].value === "Country1" || selectedOption1[2].value === "Country1")){
          this.setState({options2 : [
            { value: 'Country1', label: 'Country1' },
            { value: 'Country2', label: 'Country2' },
            { value: 'Country3', label: 'Country3' }
            ]});
        }
      }
        this.setState(
          { selectedOption1 },
          () => console.log(`Option selected:`, this.state.selectedOption1)
        );
      };

    handleChange2 = (selectedOption2: any, actionMeta: any) => {
      this.setState(
        { selectedOption2 },
        () => console.log(this.state.selectedOption2)
      );
      console.log(`action: ${actionMeta.action}`);
      console.groupEnd();
    };


    handleChange = (selectedOption3: any, actionMeta: any) => {
    console.group('Value Changed');
    this.setState(
      { selectedOption3 },
      () => console.log(this.state.selectedOption3)
    );
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

        <BorderWrapper  className="center">
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

        <Form onSubmit={this.onSubmit}>

        <FormGroup>
            <div className="row">

                <div className="col">
                    <Label for="inputName1">First Name</Label>
                    <Input  className="form-control" id="inputName1" placeholder="First Name"
                        pattern="[a-z]+" required
                        type="text"
                        name="firstName"
                        onChange={this.onChange}
                        />
                    <span style={{color: "red"}} className="invalid-message" id="userName1">
                      {this.state.errors["userName1"]}
                    </span>
                </div>

                <div className="col">

    <Label for="inputName2">Last Name</Label>
<Input type="text"
name="lastName"
onChange={this.onChange} className="form-control" id="inputName2" placeholder="Last Name"
pattern="[a-z]+" required/>
<span style={{color: "red"}} className="invalid-message" id="userName2">
    {this.state.errors["userName2"]}
</span>
                </div>
          </div>
        </FormGroup>

        <FormGroup>
          <Label for="email">Work Email Address</Label>
          <Input type="email"   name="workEmail"
            onChange={this.onChange} className="form-control" id="email" placeholder="Work Email Address"
           required/>
          <span style={{color: "red"}} className="invalid-message" id="email">
              {this.state.errors["email"]}
          </span>
        </FormGroup>

        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <IntlTelInput
          containerClassName="intl-tel-input"
          inputClassName="form-control phoneNumber"

          fieldName="phoneNumber"
          onPhoneNumberChange={this.handlePhoneChange}
          type="tel"
          className="form-control" fieldId="phone"
          valueRequired
          />
          <span style={{color: "red"}} className="invalid-message" id="phone">
              {this.state.errors["phone"]}
          </span>
        </FormGroup>

        <FormGroup>

          <Label for="Operation">Operation countries </Label>
              <div className="row">

                  <div className="col-8">
          <Select
          onChange={this.handleChange1}
          id = "Operation"
          components={animatedComponents}
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
          <span style={{color: "red"}} className="invalid-message" id="Operation">
          {this.state.errors["Operation"]}
          </span>
        </FormGroup>

        <FormGroup>

          <label htmlFor="Operation"> Company Name </label>
              <div className="row">
                <div className="col-8">
          <CreatableSelect
          isClearable
          components={animatedComponents}
          placeholder="Company Name"

          isDisabled = {this.state.isDisabled}
          name="colors"
          options={this.state.options2}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={this.handleChange2}
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

        </FormGroup>

        <FormGroup>
          <Label for="Objective"> Objective </Label>
          <CreatableSelect
          id = "Objective"
          isClearable
          components={animatedComponents}
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
        </FormGroup>

        <FormGroup>
          <textarea className="form-control" type="text"
          name="details"
          onChange={this.onChange} id="Textarea1" placeholder="More Details Description" rows="5"></textarea>

          <Button color="dark" style={{ marginTop: '2rem' }} block>
            <i className="fa fa-sign-in"></i> Request an appointment</Button>
        </FormGroup>



      </Form>
      </div>
      </div>
      </Container>
</BorderWrapper>
);
}
}

const mapStateToProps = state => ({
  request: state.request
});

export default connect(
  mapStateToProps,
  { addRequest}
)(Screen2);
