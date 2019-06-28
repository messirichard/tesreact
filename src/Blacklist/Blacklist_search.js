import React, { Component } from 'react';
import axios from 'axios';
// import './Form';
import 'bootstrap/dist/css/bootstrap.css';
import { Alert } from 'reactstrap';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class PersonList extends React.Component {
    state = {
        persons: [],
        items: []
      }
    
    componentDidMount() {
    
    }
    
    handleSubmit = event => {
      event.preventDefault();
      const user = {
        name: this.state.name
      }
      
      var arr = [];
      
      axios.get(`https://api.myjson.com/bins/e76pl`)
        .then(res => {
        const persons = res.data;
        this.setState({ persons });
          
        Object.keys(res.data).forEach(function(key) {
          arr.push(res.data[key]);
          // console.log(res.data);
        });
      });
      
      console.log(arr);
      //   const result = Object.values(arr).map(value => {
      //     // if( this.state.name ==  value.name){
      //       result.push( value);
      //     // }
      //   });

      // console.log(result);

      const result = Object.values(arr).reduce((prevArr, value) => {
        return prevArr.concat(value)
        // if (this.state.name ==  value.name) {
        //     return prevArr.concat(value.name)
        // } else {
        //     return prevArr
        // }
      }, [])
    
    console.log(result)
      
    }
    
    // handleSubmit = event => {
    //   search = async val => {
    //     this.setState({ loading: true });
    //     const res = await axios(
    //       `https://api.myjson.com/bins/87rb5`
    //     );
    //     const movies = await res.data.results;
    
    //     this.setState({ movies, loading: false });
    //   };
    // }
    render() {
      return (
          <Form onSubmit={this.handleSubmit}>
            <Row >
              <Col md={12}>
                <FormGroup>
                  <Label for="name">Search By Name</Label>
                  <Input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
                </FormGroup>
              </Col>
              <Button type="submit">Search</Button>
            </Row>

          <div className="block_results">
          <Alert color="primary">
            <div>
            { this.state.items.map(items => 
            <div>
              {items.name+" "+items.telp}
            </div>)}
          </div>
          </Alert>
          </div>
          </Form>
      )
    }
  }