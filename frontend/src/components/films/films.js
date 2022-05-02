/*
import React, { Component } from "react";

// class Films extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Films</h2>
//             </div>
//         )
//     }
// }

// export default Films;


// function Films() {
//     return <h2>Films</h2>
// }

// export default Films;



const Films = () => {
    return (
        <div>
            <h2>Films</h2>
        </div>
    )
}

export default Films;
*/


import React, {Component} from 'react';
import FilmService from "../../services/fetchFilmService/filmService";
import Film from "./film";
import "./films.css";


class Films extends Component {

    filmService = new FilmService();

    state = {films: []};


    async componentDidMount() {
        let films = await this.filmService.films2();
        
        this.setState({films: films})
    }


    render() {

        let {films} = this.state;

        return (
            <div className='back'>
                
                {
                    films.map(value => <Film item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default Films;