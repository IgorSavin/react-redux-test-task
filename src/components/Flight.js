import React from 'react'
import moment from 'moment'
import '../styles/flight.css'

export default class Flight extends React.Component {
  render() {
    return (
      <div className="flight">
        <div>{this.props.data.direction.from} => {this.props.data.direction.to}</div>
        <div>Вылет: {moment(this.props.data.departure).format('DD.MM.YYYY HH.MM')}</div>
        <div>Прилет: {moment(this.props.data.arrival).format('DD.MM.YYYY HH.MM')}</div>
        <div>{this.props.data.carrier}</div>
      </div>
    );
  }
}