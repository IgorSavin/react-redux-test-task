import { createStore } from 'redux'
import rootReducer from '../reducers'
import _ from 'lodash'

export default function configureStore(initialState) {
  // let initialState = Object.assign({}, data, {
  //   choosenCarrier: (data && data.flights) ? data.flights[0].carrier : ''
  // });
  const store = createStore(rootReducer, initialState);
  return store;
}