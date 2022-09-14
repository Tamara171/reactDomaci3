import OneMovie from "./OneMovie.jsx";
//import Movies from "./movies"

const list = ({ movies }) => {
  return (
    <div className="card-container">
      <h3>Lista filmova koje ste dodali u OMILJENE</h3>
      {movies.map((movie) => (
        <OneMovie movie={movie} key={movie.id}  />
      ))} 
    </div>
  );
};

export default list;