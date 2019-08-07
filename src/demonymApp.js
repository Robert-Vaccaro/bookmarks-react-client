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


_callApi(value){
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state}`)
  .then(response => {
    if(!response.ok) {
      throw new Error('Something went wrong, please try again later.')
    }
    return response;
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
    this.setState({
        books: data.items
        })
    })

  .catch(err => {
    this.setState({
      error: err.message
    });
  });
}

  render() {

    return (
      <div className="demonym_app">
        <CountrySelector callApi={(value) => this._callApi(value)}/>
        {this.state.books.map(book => {
            return <p key={book.id}>{book.volumeInfo.title}</p>
        })}
      </div>
    );
  }
}

export default DemonymApp;

//handleChange(event, targetState) { switch(targetState) { case 'value': this.setState({ value: event.target.value }) break case 'value2': this.setState({ value2: event.target.value }) break case 'value3': this.setState({ value3: event.target.value }) break default:break } }

//<CountrySelector callApi={(value) => this._callApi(value)}/>