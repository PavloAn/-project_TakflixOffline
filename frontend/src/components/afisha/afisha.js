import React, { Component } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import FilmService from "../../services/fetchFilmService/filmService";
import AfishaFilm from "./afishaFilm";
import { useHistory } from 'react-router-dom';


class Afisha extends Component {

    filmService = new FilmService();

    state = {films: []};


    async componentDidMount() {
        let films = await this.filmService.films2();
        this.setState({films: films});
    }



    render() {

        let {films} = this.state;



        return (
            <div>
                {
                    films.map(film => <AfishaFilm key={film._id} item={film}/>)

                }
            </div>
        )
    }
}


export default Afisha;