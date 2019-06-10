import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Actors from './Actors';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  // Uncomment this code when you're ready for the stretch problems
  // componentWillReceiveProps(newProps){
  //   if(this.props.match.params.id !== newProps.match.params.id){
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }

  // saveMovie = () => {
  //   const addToSavedList = this.props.addToSavedList;
  //   addToSavedList(this.state.movie)
  // }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <div className="save-wrapper">
        <div className="movie-card">
          <h2>{title}</h2>
          <div className="movie-director">
            Director: <em>{director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
          <div> 
              <Route
                path="/movielist/movies/:id"
                render={props => <Actors {...props} stars={stars} />}
              />
            </div>
          <div className='movie-buttons-wrapper'>
              <NavLink
                to={`/movielist/movies/${this.props.match.params.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'black'
                }}
              />
          <div><Link to={'/'} className="movie-home-button">Saved</Link></div>
          <div><Link to={'/'} className="movie-home-button">Home</Link></div>
          <div><Link to={'/movielist'} className="movie-list-button">Movie List</Link></div>
        </div>
        </div>
      </div>
    );
  }
}
