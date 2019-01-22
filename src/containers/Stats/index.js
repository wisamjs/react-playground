import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getMostFollowedPersonName } from '../../modules/People/People.selectors';
import { getStrSavedPokemonName } from './Stats.selectors';
const selectors = createStructuredSelector({
  mostFollowed: getMostFollowedPersonName,
  strongestPokemon: getStrSavedPokemonName,
});

class Stats extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Stats</h1>
          <h2> Most Followed Person:</h2>
          <p>{this.props.mostFollowed}</p>

          <h2>Strongest Pokemon </h2>
          <p> {this.props.strongestPokemon} </p>
        </div>
      </div>
    );
  }
}

export default connect(
  selectors,
  null,
)(Stats);
