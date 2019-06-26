import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class inputdata extends React.Component {
    constructor(props) {
      super(props)
      this.state = { username: '' }
    }
  
    handleChange(event) {}
  
    render() {
      return (
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="Your Name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="Telp">Telp</Label>
                <Input type="text" name="telp" id="Telp" placeholder="Your Telephone" />
              </FormGroup>
            </Col>
            <Button>Submit</Button>
          </Row>
        </Form>
      )
    }
  }

export default inputdata;
