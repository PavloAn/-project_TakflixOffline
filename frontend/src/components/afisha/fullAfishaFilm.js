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
                    {/* <h2>{id}</h2> */}
                    {
                        // film && <div> {film.id}. {film.title} - {film.completed.toString()}  </div>

                        film && <div className='containerGrid2'>

                            <hr/>

                            <div className='items1'>
                                <div className="hren">
                                    <div className=""> 
                                        <h1 className='titleOf'><span>{film.title}</span></h1>
                                    </div>
                                </div> 
                            </div>

                            <div className='items2'>
                                <img src={`${film.image}`}></img>
                            </div>

                            <div className='items3'>
                                <div><b>Режисер: </b>{film.director}</div>
                                <div><b>Рік: </b>{film.createdAt}</div>
                                <div><b>Жанр: </b>{film.genres}</div>
                                <div><b>Тривалість: </b>{film.duration}</div>
                            </div>

                            <div className='items4'>
                            <div className="hren">
                                    <div className=""> 
                                        <h1 className='titleOf'><span>Синопис</span></h1>
                                    </div>
                                </div> 
                            </div>

                            <div className='items5'>
                                <div>{film.description}</div>
                            </div>

                            <div className='items6'>
                            <div className="hren">
                                    <div className=""> 
                                        <h1 className='titleOf'><span>Трейлер</span></h1>
                                    </div>
                                </div>
                            </div>

                            <div className='items7'>
                                <iframe width="560" height="315" src={`${film.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                {/* <iframe width="560" height="315" src="https://www.youtube.com/watch?v=TW0Rm9fKPX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                {/* <iframe width="896" height="504" src="https://www.youtube.com/embed/TW0Rm9fKPX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                            </div>
  
                        </div>
                    }
                </div>


    
            );
}

export {FullAfishaFilm};