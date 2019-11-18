  
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Player = props => (
  <tr>
    <td>{props.player.firstName}</td>
    <td>{props.player.lastName}</td>
    <td>{props.player.pos}</td>
    <td>
      <Link to={"/edit/"+props.player._id}>edit</Link> | <a href="#" onClick={() => { props.deletePlayer(props.player._id) }}>delete</a>
    </td>
  </tr>
)

export default class PlayersList extends Component {
  constructor(props) {
    super(props);

    this.deletePlayer = this.deletePlayer.bind(this)

    this.state = {players: []};
  }

  componentDidMount() {
    axios.get('https://nba-api-mh.herokuapp.com/')
      .then(response => {
        this.setState({ players: response.data })
      },
      console.log(this.state.players))
      .catch((error) => {
        console.log(error);
      })
  }

  deletePlayer(id) {
    axios.delete('https://nba-api-mh.herokuapp.com/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      players: this.state.players.filter(el => el._id !== id)
    })
  }

  playerList() {
    return this.state.players.map(currentplayer => {
      return <Player player={currentplayer} deletePlayer={this.deletePlayer} key={currentplayer._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Active Players</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.playerList()}
          </tbody>
        </table>
      </div>
    )
  }
}