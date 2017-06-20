import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import GameLobby from './games/GameLobby'
import Game from './games/Game'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GameLobby} />
        <Route path="/games/:gameId" component={Game} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
