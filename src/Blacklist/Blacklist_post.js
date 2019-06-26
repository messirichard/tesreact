import React, { Component } from 'react';
import axios from 'axios';
// import './Form';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class PersonList extends React.Component {
  state = {
    name: '',
    telp:'',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
    this.setState({ telp: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name
    }

    const phone = {
        telp: this.state.telp
    };
    

    axios.post(`https://api.myjson.com/bins/87rb5`, { 
        user  : user.name,
        phone : phone.telp
    }) 
  }

  render() {
    return (
        <Form>
          <Row form onSubmit={this.handleSubmit}>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Your Name" value={this.state.username} onChange={this.handleChange}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Telp">Telp</Label>
                <Input type="text" name="telp" id="Telp" placeholder="Your Telephone" value={this.state.username} onChange={this.handleChange}/>
              </FormGroup>
            </Col>
            <Button type="submit">Submit</Button>
          </Row>
        </Form>
    )
  }
}