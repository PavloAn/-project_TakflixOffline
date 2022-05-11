// import React, { Component } from "react";


// class FullAfishaFilm extends Component {

//     render() {
//         return (
//             <div>
//                 <h2>FullAfishaFilm</h2>
//             </div>
//         )
//     }
// }


// export default FullAfishaFilm;
import React, {Component, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import FilmService from "../../services/fetchFilmService/filmService";



const FullAfishaFilm = () => {

    console.log(useParams);


    const {id} = useParams();
    //const idishka = parseInt(id);


    const [film, setFilm] = useState(null);
    //state = {film: null}; 

    // const filmService = new FilmService();


    // const fetchMovies = async () => {
    //     console.log(useParams);
    //     //const idFilm = id;
    //     const {chosenFilm} = await filmService.film(idishka);
    //     setFilm(chosenFilm);
    //     console.log(chosenFilm);
    // }


    useEffect(() => {
        //fetchMovies();
        
        // fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        fetch(`http://localhost:8800/api/movies/find/${id}`)
            .then(res => res.json())
            .then(data => setFilm(data))


    }, []);



    return (

                <div>
                    <h2>{id}</h2>
                    {
                        // film && <div> {film.id}. {film.title} - {film.completed.toString()}  </div>

                        film && <div> {film.title}</div>
                    }
                </div>


    
            );
}

export {FullAfishaFilm};