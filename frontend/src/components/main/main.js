import React, { Component, useCallback, useEffect, useState } from "react";
import "../main/style.css";

// class Main extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Main</h2>
//             </div>
//         )
//     }
// }


// export default Main;


// function Main() {
//     return <h2>Login</h2>
// }

// export default Main;



const Main = () => {

  const [id, setId] = useState(2);

  const [film, setFilm] = useState(null);


  const [idi, setIdi] = useState("626bab32d6ad9781bfd2ce4e");

  useEffect(() => {
    
    if(id==1){
      setIdi("62699703d3f886517b57cbfd");
    }
    if(id==2){
      setIdi("62699615d3f886517b57cbfb");
      
    }
    if(id==3){
      setIdi("6269950ad3f886517b57cbf9");
    }
    if(id==4){
      setIdi("626993e2d3f886517b57cbf7");
    }
    fetch(`http://localhost:8800/api/movies/find/${idi}`)
        .then(res => res.json())
        .then(data => setFilm(data))

}, [id])




  /*
      useEffect(() => {
      //fetchMovies();
      
      // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      fetch(`http://localhost:8800/api/movies/find/${id}`)
          .then(res => res.json())
          .then(data => setFilm(data))
  }, []);
  */


  return (
    /* film && <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">

    


    <div class="carousel-item active">
      <img src={film.image} class="d-block w-100 slider-image" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>{film.title}</h1>
        <p>{film.duration}</p>
      </div>
    </div>
    <div class="carousel-item active">
      <img src={film.image} class="d-block w-100 slider-image" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>{film.title}</h1>
        <p>{film.duration}</p>
      </div>
    </div>
    <div class="carousel-item active">
      <img src={film.image} class="d-block w-100 slider-image" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1>{film.title}</h1>
        <p>{film.duration}</p>
      </div>
    </div>
  </div>
  
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */
<div>
            <button onClick={() => id <= 1 ? setId(4) : setId(id => id-1) }> prev </button>
                <h2>
                    {
                        film && <div><img src={film.image}></img> </div>
                    }
                </h2>
            <button onClick={() => id >= 5 ? setId(1) : setId(id => id+1) }> next </button>
        </div>
)}

export default Main;