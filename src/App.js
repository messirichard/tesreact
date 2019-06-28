import React, { Component } from 'react';
import './style.css';
// import './Form';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Blacklist_post from './Blacklist/Blacklist_post';
import Blacklist_get from './Blacklist/Blacklist_get';
import Blacklist_search from './Blacklist/Blacklist_search';



class Ex1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      telp:''
    };
  }

  handleChange(e) {
    this.setState({
      name: e.target.value,
      telp: e.target.value
    });
  }

  
  render() {
    return (
      <div className="prelative container">
        <Blacklist_post />
        {/* <Blacklist_get /> */}
        <Blacklist_search />
      </div>
    )
  }
}

export default Ex1;
