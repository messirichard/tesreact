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
    }).then(res => console.log(res)).catch(err => console.log(err.res))
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Your Name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Telp">Telp</Label>
                <Input type="text" name="telp" id="Telp" placeholder="Your Telephone" value={this.state.telp} onChange={e => this.setState({telp: e.target.value})}/>
              </FormGroup>
            </Col>
            <Button type="submit">Submit</Button>
          </Row>
        </Form>
    )
  }
}