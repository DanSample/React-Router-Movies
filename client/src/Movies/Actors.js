import React, { Component } from 'react';

export default class Actors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
  }

  toggleVisibility = () => {
    this.setState({
      visibility: !this.state.visibility
    });
  };

  render() {
    if (this.state.visibility) {
      return (
        <div>
          <h3 onClick={this.toggleVisibility}>Actors</h3>
          {this.props.stars.map(star => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </div>
      );
    } else {
      return <h3 onClick={this.toggleVisibility}>Actors</h3>;
    }
  }
}
