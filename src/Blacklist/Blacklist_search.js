import React, { Component } from 'react';
import axios from 'axios';
// import './Form';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class PersonList extends React.Component {
    state = {
        persons: []
      }
    
    componentDidMount() {
    axios.get(`https://api.myjson.com/bins/e76pl`)
        .then(res => {
        const persons = res.data;
        this.setState({ persons });
        })
    }
    // console.log('adsfasdf');
    
    // handleSubmit = event => {
        // search = async val => {
        //     this.setState({ loading: true });
        //     const res = await axios(
        //     `https://api.myjson.com/bins/e76pl`
        //     );
        //     const models = await res;
        
        //     this.setState({ models, loading: false });
        // };
    // };

    render() {
      return (
          <Form>
            <Row form onSubmit={this.handleSubmit}>
              <Col md={12}>
                <FormGroup>
                  <Label for="name">Search By Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Name" value={this.state.username} onChange={this.handleChange}/>
                </FormGroup>
              </Col>
              <Button type="submit">Search</Button>
              <div>
                { this.state.persons.map(person => 
                <div>
                {person.name+" "+person.telp}
                </div>)}
                </div>
            </Row>
          </Form>
      )
    }
  }