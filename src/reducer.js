import * as Types from './types'
import moment from 'moment'

const defaultState = {
  neos:{},
  selectedDate: moment().format('YYYY-MM-DD'),
  selectedObject: null
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.ADD_NEOS:
      return {
        ...state,
        neos: {
          ...state.neos,
          ...action.neos
        }
      }
    case Types.SELECT_DATE:
      return {
        ...state,
        selectedDate: action.date
      }

    case Types.SELECT_OBJECT:
      return {
        ...state,
        selectedObject: action.object
      }

    default:
      return state
  }
}

export default reducer
