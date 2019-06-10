import React from 'react';
import { Link } from 'react-router-dom';

const SavedList = props => {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {props.list.map(movie => (
          <span className="saved-movie">{movie.title}</span>
        ))}
        <div className='save-buttons-wrapper'>
          <Link
            className="save-home-button"
            to="/movielist"
          >
            <div>Saved</div>
          </Link>
          <Link
            className='save-home-button'
            to="/"
          >
          <div>Home</div>
          </Link>
        </div>
      </div>
    );
  }

  export default SavedList;
