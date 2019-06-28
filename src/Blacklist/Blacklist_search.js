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
    
    onChangeHandler = async e => {
      this.search(e.target.value);
      this.setState({ value: e.target.value });
    };
    
    handleSubmit = event => {
      search = async val => {
        this.setState({ loading: true });
        const res = await axios(
          `https://api.myjson.com/bins/87rb5`
        );
        const movies = await res.data.results;
    
        this.setState({ movies, loading: false });
      };
    }
    render() {
      return (
          <Form>
            <Row form onSubmit={this.handleSubmit}>
              <Col md={12}>
                <FormGroup>
                  <Label for="name">Search By Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                </FormGroup>
              </Col>
              <Button type="submit">Search</Button>
            </Row>
          </Form>
      )
    }
  }