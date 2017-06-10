import { SET_CHOOSEN_CARRIER } from '../constants'

export function setChoosenCarrier(choosenCarrier) {
  return {
    type: SET_CHOOSEN_CARRIER,
    payload: choosenCarrier
  }
}