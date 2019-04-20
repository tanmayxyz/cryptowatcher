import React, { Component } from 'react';
import NavBar from './components/NavBar'
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom'
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import SeeMore from './components/SeeMore'

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
      <BrowserRouter>
        <Route exact path="/" component ={Home} />
        <Route path = "/about" component={AboutMe} />
        <Route path = "/see_more" component={SeeMore} />
      </BrowserRouter>
        <div className="container">
          
        </div>
      </div>
    );
  }
}

export default App;
