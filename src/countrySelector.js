import React, { Component } from 'react';
import './countrySelector.css';

class CountrySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', value2: '', value3: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event, targetState) {
        switch(targetState) {
            case 'value': 
            this.setState({
                value: event.target.value
            })
            break
            case 'value2': 
            this.setState({
                value: event.target.value
            })
            break
            case 'value3': 
            this.setState({
                value: event.target.value
            })
            break
            default:break
        }
      }
    
      handleSubmit(event) {
        event.preventDefault();
        this.props.callApi(this.state)
      }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name of Book: 
          <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event, "value")} />
        </label>
        <label>
          Filter: 
          <select value2={this.state.value2} onChange={(event) => this.handleChange(event, "value2")}>
            <option value2="No Filter">No Filter</option>
            <option value2="Free">Free</option>
            <option value2="eBook">eBook</option>
            <option value2="Dank">Dank</option>
          </select>
        </label>
        <label>
          Print Type: 
          <select value3={this.state.value3} onChange={(event) => this.handleChange(event, "value3")}>
            <option value3="All">All</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        
      </form>
    );
  }
}

export default CountrySelector;