import API from '../../api'
import {
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

const api = new API()
export const CLICK_BOX = 'CLICK_BOX'

export default (_id, index) => {
  return (dispatch) => {
    const backend = api.service('games')
    api.app.authenticate()
      .then(() => {
        backend.patch(_id, { click: index })
        .then(() => {
          dispatch({
            type: CLICK_BOX,
            payload: index
          })
        })
        .catch((error) => {
          dispatch({
            type: LOAD_ERROR,
            payload: error.message
          })
        })
      })
      .catch((error) => {
        dispatch({
          type: LOAD_ERROR,
          payload: error.message
        })
      })
  }
}
