import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePlayer extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      pos: '',
    }
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  onChangePosition(e) {
    this.setState({
      pos: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const player = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      pos: this.state.pos,
    }

    console.log(player);

    axios.post('https://nba-api-mh.herokuapp.com/', player)
      .then(res => console.log(res.data));

    setInterval(function(){ window.location = '/'}, 1000);
  }

  render() {
    return (
    <div>
      <h3>Create New NBA Player</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>First Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
              />
        </div>
        <div className="form-group"> 
          <label>Last Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
              />
        </div>
        <div className="form-group">
          <label>Position: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.pos}
              onChange={this.onChangePosition}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Create Player" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}