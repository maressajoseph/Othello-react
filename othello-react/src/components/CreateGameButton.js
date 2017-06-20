import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import createGame from '../actions/games/create'


class CreateGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    createGame: PropTypes.func.isRequired,
  }

  createGame = () => {
    return 
  }

  render() {
    const { createGame, signedIn } = this.props
    if (signedIn)
      return (
        <p className="CreateGameButton">
          <button onClick={this.createGame}>
            Create a new game
          </button>
        </p>
      )
      else {
        return null
      }

  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps)(CreateGameButton)
