import React, { Component } from 'react';
import './countrySelector.css';

class CountrySelector extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', value2: '', value3: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        this.setState({value2: event.target.value2});
        this.setState({value3: event.target.value3});
      }
    
      handleSubmit(event) {
        console.log('Book Title: ' + this.state.value);
        console.log('Your Filter is: ' + this.state.value2);
        console.log('Print Type: ' + this.state.value3);
        event.preventDefault();
      }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name of Book: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Filter: 
          <select value2={this.state.value2} onChange={this.handleChange}>
            <option value2="No Filter">No Filter</option>
            <option value2="Free">Free</option>
            <option value2="eBook">eBook</option>
            <option value2="Dank">Dank</option>
          </select>
        </label>
        <label>
          Print Type: 
          <select value3={this.state.value3} onChange={this.handleChange}>
            <option value3="All">All</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
        
      </form>
    );
  }
}

export default CountrySelector;