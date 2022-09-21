import "./App.css";
import NavBar from "./components/navBar.jsx";
import List from "./components/list";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./components/movies.jsx";
import slika1 from "./slike/Mi_nismo_anđeli1.jpg";
import slika2 from "./slike/Minismoandjeli2.jpg";
import slika3 from "./slike/Mi_nismo_andjeli_3.jpg";

function App() {
  const [listNum, setListNum] = useState(0);
  const [listMovies, setListMovies] = useState([]);
  const [movies] = useState([
    {
      id: 1,
      image: slika1,
      title: "Mi nismo andjeli",
      description:
        "Mi nismo anđeli srbijanska/jugoslavenska je filmska komedija iz 1992. godine koju je režirao i napisao Srđan Dragojević. Glavne uloge tumače Nikola Kojo, Milena Pavlović, Uroš Đurić, Srđan Todorović, Zoran Cvijanović i Branka Katić. ",
        
      amount: 0,
    },
    {
      id: 2,
      image: slika2,
      title: "Mi nismo andjeli 2",
      description:
        "Nastavak legendarnog filma o Nikoli, beogradskom zavodniku. U drugom delu, Nikola je otac tinejdžerke koji mora da se izbori s brojnim udvaračima svoje ćerke.",
      amount: 0,
    },
    {
      id: 3,
      image: slika3,
      title: "Mi nismo andjeli 3",
      description:
        "Rokenrol uzvraća udarac, poznat i kao Mi nismo anđeli 3 je treći nastavak filma Mi nismo anđeli. Međutim, ovaj nastavak odstupa od prethodna dva, jer se zasniva na priči Srđana Dragojevića „Dan kad je crk‘o Maršal“, i glumi značajno izmenjena glumačka postava u odnosu na prethodna dva filma.",
      amount: 0,
    },
  ]);
  function refreshList() {
    let newMovies = movies.filter((movie) => movie.amount > 0);
    setListMovies(newMovies);
  }
  function addMovies(title, id) {
    console.log("Dodat je film: " + title);
    setListNum(listNum + 1);
    
    movies.forEach((movie) => {
      if (movie.id === id) {
        movie.amount++;
      }
      console.log(movie.amount);
    });
    refreshList();
  }
    function deleteMovies(title, id) {
      console.log("Obrisan je film: " + title);
      setListNum(listNum - 1);
      
      movies.forEach((movie) => {
        if (movie.id === id && movie.amount>0) {
           movie.amount--;
        }
        console.log(movie.amount);
      });
      refreshList();
  }
  
  return (
    <BrowserRouter className="App">
      <NavBar listNum={listNum}></NavBar>
      <Routes>
        <Route
          path="/"
          element={<Movies  movies={movies} onAdd={addMovies} onDelete={deleteMovies}/>}
          />
          
        <Route path="/list" element={<List movies={listMovies} />} />
     </Routes>
    </BrowserRouter>
  );

}
 export default App;


