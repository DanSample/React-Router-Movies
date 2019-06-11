import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => {
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <span className="saved-movie">{movie.title}</span>
      ))}
      <div className="save-buttons-wrapper">
        <Link className="save-home-button" to="/movielist">
          <div>Saved</div>
        </Link>
        <div className="save-home-button">
          <div onClick={homeRoute}>Home</div>
        </div>
      </div>
    </div>
  );

  function homeRoute() {
    props.history.push('/');
  }
};

export default SavedList;
