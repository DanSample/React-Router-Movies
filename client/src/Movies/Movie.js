import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import Actors from './Actors';

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,
      showActors: true
    };
    console.log(this.showActors);
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

  handleToggleActors = e => {
    if (e.target.className !== 'active') {
      this.setState({
        showActors: true
      });
    } else {
      this.setState({
        showActors: !this.state.showActors
      });
    }
  };

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
          <nav>
            <NavLink
              to={`/movies/${this.props.match.params.id}/actors`}
              onClick={this.handleToggleActors}
              style={{
                textDecoration: 'none',
                color: 'black'
              }}
            >
              <h3>Actors</h3>
            </NavLink>
          </nav>
          {this.state.showActors && (
            <div>
              <Route
                exact
                path="/movies/:id/actors"
                render={props => <Actors {...props} stars={stars} />}
              />
            </div>
          )}
        </div>
        <div className="save-button">Save</div>
      </div>
    );
  }
}
