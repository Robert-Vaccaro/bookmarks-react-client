import React, { Component } from 'react';
import './demonymApp.css'


import CountrySelector from './countrySelector';

class DemonymApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=harry+potter')
      .then(response => {
        if(!response.ok) {
          throw new Error('Something went wrong, please try again later.')
        }
        return response;
      })
      .then(response => response.json())
      .then(data => 
        console.log(data))
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  render() {

    return (
      <div className="demonym_app">
        <CountrySelector />
      </div>
    );
  }
}

export default DemonymApp;