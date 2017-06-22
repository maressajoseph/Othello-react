import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import getCurrentGame from '../actions/games/get'
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
    userId: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { _id } = this.props
    const { getCurrentGame } = this.props
    getCurrentGame(_id)
    console.log(_id)
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
        <div>
          <div className="players">
            <div className="playerOne">
              <h3>Player 1:</h3>
              <p>{players[0].name}</p>
              <p>Score: {players[0].score}</p>
            </div>
            <div className="boardField">
              { board.map((x, index) => (<button key={index} className="empty">{x.box}</button>)) }
            </div>
            <div className="playerTwo">
              <h3>Player 2:</h3>
              <p>No second player yet</p>
            </div>
          </div>
        </div>
      )
      else {
        return (
          <div>
            <div className="players">
              <div className="playerOne">
                <h3>Player 1:</h3>
                <p>{players[0].name}</p>
                <p>Score: {players[0].score}</p>
              </div>
              <div className="boardField">
                { board.map((x, index) => (<button key={index} className={`empty${board[index].box === undefined ? '' : (board[index].box ? ' pink':' green')}`}>{x.box}</button>)) }
              </div>
              <div className="playerTwo">
                <h3>Player 2:</h3>
                <p>{players[1].name}</p>
                <p>Score: {players[1].score}</p>
              </div>
            </div>
          </div>
        )
      }
  }
}

const mapStateToProps = ({ currentGame }) => ({ currentGame })

export default connect(mapStateToProps, { getCurrentGame })(Game)
