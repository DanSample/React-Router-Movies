import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import Home from './Home'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <Route 
          exact
          path="/" 
          render={props => <Home {...props} />} />
        <Route
          exact
          path="/movielist"
          render={props => <div><SavedList {...props} list={this.state.savedList} /><MovieList {...props} /></div>}
        />
        <Route 
          path="/movielist/movies/:id" 
          render={props => <Movie {...props} />} />
      </div>
    );
  }
}
