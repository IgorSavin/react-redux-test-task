import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Select from '../components/Select'
import Flight from '../components/Flight'
import * as actions from '../actions/Actions'
import '../styles/app.css'

class App extends React.Component {
  getCarriers() {
    let carriers = [];
    if (this.props.flights) {
      carriers = this.props.flights.map(flight => flight.carrier);
    }
    return _.uniq(carriers);
  }
  getFlightsByCarrier(carrier) {
    let flights = [];
    if (this.props.flights) {
      if (carrier) {
        flights = this.props.flights.filter(flight => flight.carrier === carrier);
      } else {
        flights = this.props.flights;
      }
    }
    return flights;
  }
  onChangeSelect(newValue) {
    console.log(newValue);
    this.setState({currentCarrier: newValue});
  }
  render() {
    const { choosenCarrier } = this.props;
    const { setChoosenCarrier } = this.props.actions;
    const carriers = this.getCarriers();
    const flights = this.getFlightsByCarrier(this.props.choosenCarrier);
    return (
      <div className="app">
        <Select carriers={carriers} choosenCarrier={choosenCarrier} onChange={setChoosenCarrier}/>
        <div className="app-flights">
          {flights.map(flight => 
            <Flight key={flight.id} data={flight}/>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    choosenCarrier: state.choosenCarrier,
    flights: state.flights
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)