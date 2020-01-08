import React from 'react';

const Home = props => {
  return (
    <div className='home-page'>
      <div className='home-shadow-box'>
        <h1>Welcome!</h1>
        <h3>Check Out Our Movie List</h3>
        <button onClick={movieListRoute} style={{height: 50, width: 250}}>Enter</button>
      </div>    
    </div>
  )

  function movieListRoute() {
    props.history.push('/movielist')
  } 
}

export default Home;