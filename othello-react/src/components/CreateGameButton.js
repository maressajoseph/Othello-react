import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
import createGame from '../actions/games/create'
import RaisedButton from 'material-ui/RaisedButton'
import StartIcon from 'material-ui/svg-icons/av/play-circle-filled'
import './CreateGameButton.css'

class CreateGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    createGame: PropTypes.func.isRequired,
  }

  makeGame = () => {
    this.props.createGame()
  }

  render() {
    const { createGame, signedIn } = this.props
    if (signedIn)
      return (
        <p className="CreateGameButton">
          <RaisedButton onClick={this.makeGame.bind(this)} icon={<StartIcon/>} primary={true} label="Start a new game"/>
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

export default connect(mapStateToProps, { createGame })(CreateGameButton)
