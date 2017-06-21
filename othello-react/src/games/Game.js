import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import './Game.css'

export class Game extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired,
    players: PropTypes.array.isRequired,
    started: PropTypes.bool.isRequired,
    winner: PropTypes.number,
    draw: PropTypes.bool,
    turn: PropTypes.number,
    userId: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }


  render() {
    const {
      _id,
      board,
      players,
      winner,
      draw,
      turn
    } = this.props

    if (players[1] === undefined)
      return (
        <div className='players'>
          <h3>Player 1:</h3>
            <p>{players[0].name}</p>
            <p>Score: {players[0].score}</p>
          <h3>Player 2:</h3>
            <p>No second player yet</p>
        </div>
      )
      else {
        return (
          <div className='players'>
            <h3>Player 1:</h3>
            <p>{players[0].name}</p>
            <p>Score: {players[0].score}</p>
            <h3>Player 2:</h3>
            <p>{players[1].name}</p>
            <p>Score: {players[1].score}</p>
          </div>
        )
      }
  }
}
//
// const mapStateToProps = ({ games }) => ({ games })

export default (Game)
