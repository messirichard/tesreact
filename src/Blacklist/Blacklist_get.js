import React from 'react';

import axios from 'axios';

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

  render() {
    return (
      <div>
        { this.state.persons.map(person => 
        <div>
          {person.name+" "+person.telp}
        </div>)}
      </div>
    )
  }
}