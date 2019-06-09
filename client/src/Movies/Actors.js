import React from 'react';

const Actors = props => {
  return (
    <div>
      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default Actors;
