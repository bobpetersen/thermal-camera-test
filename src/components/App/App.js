import React, { Component } from 'react';
import thermal from './thermal.jpg';
import './App.css';
import axios from 'axios';
import Gallery from '../Gallery/Gallery';
import Search from '../Search/Search';
import ShowSearch from '../Search/ShowSearch';
// import Gallery from '../Gallery/Gallery'



class App extends Component {

  state = {
    // this is just to show us the different data we are using on our images
    newImage: {
      path: '',
      date: ''
    },
    // array for client side storage
    imageList: [ ],
    // this is used for searching the database for the specific image
    imageSearch:{
      date: ''
    },
    // this is what we will show as the search results
    showSearch: [ ]
  }


  //GET request to retrieve images
  getImages = () => {
    axios({
      method: 'GET',
      url: '/images'
    })
    .then( (response) => {
      console.log('GET response was', response.data );
      // Put the response into state, so that we will trigger render() 
      this.setState({
        imageList: response.data 
      })
    })
    .catch( (error) => {
      alert('Error on GET request for images', error);
    })
  } // end getImages


  // This triggers getImages at the first render of the DOM
  componentDidMount() {
    console.log('About to get images');
    this.getImages();
  }

  // handleSearchChange for Search component
  handleSearchChange = (propertyName) => (event) => {
    this.setState({
      imageSearch: {
        // Do we need this (below) if we don't care to store the search history??
        ...this.state.imageSearch,
        [propertyName]: event.target.value,
        // [propertyName]: {moment(event.target.value).format('ddd M[/]D, YYYY, h:mm')},
      }
    })
  }


  // This function will take the state.imageSearch data
  // and GET any matching images from the database to show on DOM
  submitSearch = (event) => {
    event.preventDefault();
    let searchQuery = this.state.imageSearch.date;
    console.log('Searching images for:', searchQuery);
    axios({
      method: 'GET',
      // needs fixing, the searchQuery isn't blue yet
      url: `/search/${searchQuery}`
    })
    .then( (response) => {
      console.log('GET response from Search was', response.data );
      // Put the response into state, so that we will trigger render() 
      this.setState({
        showSearch: response.data
      })
    })
    .catch( (error) => {
      alert('Error on image search query', error);
    })
  } // end submitSearch




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Low Cost Thermal Camera
          </p>
          <img src={thermal} className="App-logo" alt="logo" />
        </header>
        <Search handleSearchChange={this.handleSearchChange}
                submitSearch={this.submitSearch}
                imageSearch={this.state.imageSearch}/>
        <ShowSearch showSearch={this.state.showSearch}/>
        <Gallery list={this.state.imageList}
                 />
      </div>
    );
  }
}

export default App;
