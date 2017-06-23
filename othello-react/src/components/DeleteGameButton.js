import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import deleteGame from '../actions/games/remove'
import RaisedButton from 'material-ui/RaisedButton'
import StartIcon from 'material-ui/svg-icons/action/highlight-off'
import './DeleteGameButton.css'

class DeleteGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    deleteGame: PropTypes.func.isRequired,
  }

  removeGame = () => {
    this.props.deleteGame()
  }

  render() {
    const { signedIn } = this.props
    if (signedIn)
      return (
        <div className="DeleteGameButton">
          <RaisedButton onClick={this.removeGame.bind(this)} icon={<StartIcon/>} primary={true} label="Delete this game"/>
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

export default connect(mapStateToProps, { deleteGame })(DeleteGameButton)
