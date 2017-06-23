import API from '../../api'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const REMOVE_GAME = 'REMOVE_GAME'

const api = new API()

export default (_id) => {
  return (dispatch) => {
    dispatch({ type: APP_LOADING })

    const backend = api.service('games')

    api.app.authenticate()
      .then(() => {
        backend.remove(_id)
          .then((result) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({ type: LOAD_SUCCESS })

            dispatch({
              type: REMOVE_GAME,
              payload: result
            })
          })
          .catch((error) => {
            dispatch({ type: APP_DONE_LOADING })
            dispatch({
              type: LOAD_ERROR,
              payload: error.message
            })
          })
      })
      .catch((error) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
