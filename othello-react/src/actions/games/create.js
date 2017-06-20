import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()

export default (newGame) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.app.authenticate()
    .then() => {
      
    }

    backend.create(newGame)
      .then((result) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
    .catch((error) => {

    })
  }
}
