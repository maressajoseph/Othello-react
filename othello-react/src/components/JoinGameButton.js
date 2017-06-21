import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import joinGame from '../actions/games/join'
import RaisedButton from 'material-ui/RaisedButton'
import JoinIcon from 'material-ui/svg-icons/content/add-circle'
import './JoinGameButton.css'

class JoinGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    joinGame: PropTypes.func.isRequired,
  }

  addPlayerToGame = () => {
    this.props.joinGame()
  }

  render() {
    const { signedIn } = this.props
    if (signedIn)
      return (
        <div className="JoinGameButton">
          <RaisedButton onClick={this.addPlayerToGame.bind(this)} icon={<JoinIcon/>} primary={true} label="Join this game"/>
        </div>
      )
      else {
        return null
      }

  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser._id,
})

export default connect(mapStateToProps, { joinGame })(JoinGameButton)
