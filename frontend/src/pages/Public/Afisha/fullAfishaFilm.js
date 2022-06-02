import React, { Component } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import FilmService from "../filmService";
import AfishaFilm from "./afishaFilm";
import { useHistory } from 'react-router-dom';
import "./afisha.css";

class FullAfishaFilm extends Component {

    filmService = new FilmService();

    state = {films: []};


    async componentDidMount() {
        let films = await this.filmService.films2();
        this.setState({films: films});
    }



    render() {

        let {films} = this.state;



        return (
            
               
            <div className="afishacss">

                    <div className="container">
                        <div className="intro__inner"> 
                            <h1 className="intro__title">Афіша</h1>
                        </div>
                    </div> 

                {
                    films.map(film => <AfishaFilm key={film._id} item={film}/>)

                }
            </div>
            
        )
    }
}


export default FullAfishaFilm;