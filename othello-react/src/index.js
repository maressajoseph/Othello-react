import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store, { history } from './store'
import registerServiceWorker from './registerServiceWorker'
import App from './App'
import GameLobby from './games/GameLobby'
import SignIn from './users/SignIn'
import SignUp from './users/SignUp'
import './index.css'

injectTapEventPlugin()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={GameLobby} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
