import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import getCurrentGame from '../actions/games/get'
import updateGame from '../actions/games/update'
import './Game.css'

export class Game extends PureComponent {
  // static propTypes = {
  //   _id: PropTypes.string.isRequired,
  //   board: PropTypes.array.isRequired,
  //   players: PropTypes.array.isRequired,
  //   started: PropTypes.bool.isRequired,
  //   winner: PropTypes.number,
  //   draw: PropTypes.bool,
  //   turn: PropTypes.number,
  //   userId: PropTypes.object.isRequired
  // }

  componentWillMount() {
    const { _id } = this.props
    const { getCurrentGame } = this.props
    getCurrentGame(_id)
  }

  checkedBox(index) {
    const { _id } = this.props
    return () => {
      this.props.updateGame(_id, index)
    }
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
                <h3>{winner === undefined ? (turn === 0 ? `It is ${players[0].name}'s turn` : `It is ${players[1].name}'s turn`) : `${players[winner].name} WON`}</h3>
                { board.map((x, index) => (<button key={index} onClick={this.checkedBox(index).bind(this)} className={`empty${board[index].box === undefined ? '' : (board[index].box ? ' pink':' green')}`}>{x.box}</button>)) }
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

export default connect(mapStateToProps, { getCurrentGame, updateGame })(Game)
