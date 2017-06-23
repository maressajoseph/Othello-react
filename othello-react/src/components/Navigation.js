import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import GroupWork from 'material-ui/svg-icons/action/group-work'
import FlatButton from 'material-ui/FlatButton'

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  signUp = () => {
    this.props.push('/sign-up')
  }

  signIn = () => {
    this.props.push('/sign-in')
  }

  goHome = () => {
    this.props.push('/')
  }

  render() {
    const { signedIn, signOut } = this.props
    return (
      <AppBar
        title="Othello"
        iconElementLeft={<IconButton onClick={this.goHome}><GroupWork /></IconButton>}
        iconElementRight={signedIn ?
          <FlatButton label="Sign out" onClick={signOut} /> :
          <div><FlatButton label="Sign in" onClick={this.signIn} />
          <FlatButton label="Sign up" onClick={this.signUp} /></div>
        }
      />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
    signedIn: !!currentUser && !!currentUser._id,
  })

export default connect(mapStateToProps, { push, signOut })(Navigation)
