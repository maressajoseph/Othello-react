import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Game from './Game'
import fetchGames from '../actions/games/fetch'
import subscribeToGamesService from '../actions/games/subscribe'
import CreateGameButton from '../components/CreateGameButton'
import Box from 'material-ui/svg-icons/image/crop-square'

export class GameLobby extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  renderGame(game, index) {
    return <Game key={index} { ...game }  />
  }

  render() {
    return(
      <div>
        <header>
          <Title content="Start playing" />
          <CreateGameButton />
        </header>

        <main>
          { this.props.games.map(this.renderGame.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

export default connect(mapStateToProps, {
  fetchGames, subscribeToGamesService
})(GameLobby)
