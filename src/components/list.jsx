import OneMovie from "./OneMovie.jsx";
//import Movies from "./movies"

const list = ({ movies }) => {
  return (
    <div className="card-container">
      <h3>Lista filmova koje ste dodali u OMILJENE</h3>
      {movies.map((movie) => (
        <OneMovie movies={movie} key={movie.id}  inList={0} />
      ))} 
    </div>
  );
};

export default list;