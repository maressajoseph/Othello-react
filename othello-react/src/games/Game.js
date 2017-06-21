import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'

export class Game extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    board: PropTypes.array.isRequired,
    players: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
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
      id,
      board,
      players,
      winner,
      draw,
      turn
    } = this.props

    return(
      <div>
        <h3>{ players }</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps)(Game)
