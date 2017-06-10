import React from 'react'
import '../styles/select.css'

export default class Select extends React.Component {
  onChange(event) {
    console.log(event.target.value);
    this.props.onChange(event.target.value);
  }
  render() {
    return (
      <div className="select">
        Выберите авиакомпанию:
        <select className="select-switcher" onChange={this.onChange.bind(this)} value={this.props.choosenCarrier}>
          <option key="all" value="">Все авиакомпании</option>
          {this.props.carriers.map(carrier =>
            <option key={carrier}>{carrier}</option>
          )}
        </select>
      </div>
    );
  }
}