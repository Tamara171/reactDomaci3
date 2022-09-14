import React from 'react';
import OneMovie from './OneMovie.jsx';

const Movies = ({ movies, onAdd, onDelete}) => {
    
  return (
    <div className='all-products'>
      {movies.map((movie) => ( 
      <OneMovie  movies={movie} key={movie.id} onAdd={onAdd} onDelete={onDelete} inList={1}  />
    
      ))}
    
      
    </div>
  );
  };


export default Movies;