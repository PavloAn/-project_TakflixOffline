import React, { Component, useCallback, useEffect, useState } from "react";
import "./main.css";

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




    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
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
        <div>
            <button onClick={() => id <= 1 ? setId(4) : setId(id => id-1) }> prev </button>
                <h2>
                    {
                        film && <div> {film.name} </div>
                    }
                </h2>
            <button onClick={() => id >= 5 ? setId(1) : setId(id => id+1) }> next </button>
        </div>
    )
}

export default Main;