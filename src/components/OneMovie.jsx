import React from 'react'
import {BsDashLg, BsFillPlusCircleFill, BsPlusLg} from "react-icons/bs";
import {BsDashCircleFill} from "react-icons/bs";
import { ImMinus } from 'react-icons/im';

function OneMovie({movies, onAdd, onDelete, inList}) {
  const stil = {margin:1 + "em", borderStyle:"dotted"};


    
  return (
        <div className={inList== 1 ? "card" : "card-list"} style={stil}>
          <img 
          className={inList === 1 ? "card-img-top" : "card-img-left"}
          alt="Neka slika" 
          src="https:/picsum.photos/200"
          />
          <div className="card-body">
            <h3 className="card-title"> {movies.title} </h3>
            <p className="card-text"> {movies.description} </p>
         </div>
    {inList === 1 ? (
          <>
        <button
          className="btn"
          onClick={() => onAdd(movies.title, movies.id)}
        >
          <BsPlusLg/>
        </button>
        <button className="btn"
           onClick={() => onDelete(movies.title, movies.id)}
           >
          <ImMinus />
        </button>
        
      </>
    ) : (
      <h4>Amount: {movies.amount}</h4>
    )}
   </div>
     ); 
    }
    
export default OneMovie;
