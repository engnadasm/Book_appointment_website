import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addRequest } from '../actions/requestAction';

class RequestModal extends Component {
  state = {
    modal: false,
    firstName: '',
    lastName: '',
    workEmail: '',
    phoneNumber: '',
    country: [],
    company: [],
    objective: [],
    details: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newRequest = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      workEmail: this.state.workEmail,
      phoneNumber: this.state.phoneNumber,
      country: this.state.country,
      company:  this.state.company,
      objective: this.state.objective,
      details: this.state.details
    };

    // Add Request via addRequest action
    this.props.addRequest(newRequest);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Request
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To Shopping List</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="request">Request</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="request"
                  placeholder="Add shopping request"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  id="request"
                  placeholder="Add shopping request"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="workEmail"
                  id="request"
                  placeholder="Add shopping request"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="phoneNumber"
                  id="request"
                  placeholder="Add shopping request"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="country"
                  id="request"
                  placeholder="Add shopping request"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="company"
                  id="request"
                  placeholder="Add shopping request"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="objective"
                  id="request"
                  placeholder="Add shopping request"
                  onChange={this.onChange}
                />
                <Input
                  type="text"
                  name="details"
                  id="request"
                  placeholder="Add shopping request"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Add Request
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  request: state.request
});

export default connect(
  mapStateToProps,
  { addRequest}
)(RequestModal);
