import { SET_CHOOSEN_CARRIER } from '../constants'

const initialState = {
  choosenCarrier: '',
  flights: []
}

export default function state(state = initialState, action) {
  switch (action.type) {
    case SET_CHOOSEN_CARRIER:
      return Object.assign({}, state, { choosenCarrier: action.payload })
    default:
      return state;
  }
}