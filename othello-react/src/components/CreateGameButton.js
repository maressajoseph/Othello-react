import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import PropTypes from 'prop-types'


class CreateGameButton extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
  }


  render() {
    const { onChange, signedIn } = this.props
    if (signedIn)
      return (
        <p className="CreateGameButton">
          <button onClick={ onChange }>
            <Link to={'/game'}>Create a New Game</Link>
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
