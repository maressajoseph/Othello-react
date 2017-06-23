import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Game from './Game'
import fetchGames from '../actions/games/fetch'
import subscribeToGamesService from '../actions/games/subscribe'
import CreateGameButton from '../components/CreateGameButton'
import JoinGameButton from '../components/JoinGameButton'

export class GameLobby extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    fetchGames: PropTypes.func.isRequired,
    subscribeToGamesService: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchGames()
    const { subscribed } = this.props
    if (!subscribed) this.props.subscribeToGamesService()
  }


  renderGame(game, index) {
    return <Game key={index} { ...game }  />
  }

  render() {
    if (!this.props.games[0]) {
      return(
        <div>
        <header>
          <CreateGameButton />
        </header>
        </div>
      )
    }

    if (this.props.games[0].players[0].userId !== this.props.currentUser._id && !this.props.games[0].players[1]) {
      return(
        <div>
          <header>
            <JoinGameButton/>
          </header>
          <main>
            { this.props.games.map(this.renderGame.bind(this)) }
          </main>
        </div>
      )
    }

    return (
    <main>
      { this.props.games.map(this.renderGame.bind(this)) }
    </main>
    )
  }
}

const mapStateToProps = ({ currentUser, currentGame, games, subscriptions }) => ({ currentUser, currentGame, games, subscribed: subscriptions.includes('games') })

export default connect(mapStateToProps, {
  fetchGames, subscribeToGamesService
})(GameLobby)
