import React, { Component, useCallback, useEffect, useState } from "react";
import "./main.css";
import { Routes, Route, Link, Outlet } from 'react-router-dom';

const MainFilms = () => {

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






  return (

<div>
    <div className="containerGrid3">

    <div className="items111">
        <button className="button1" onClick={() => id <= 1 ? setId(4) : setId(id => id-1) }><h2>  prev  </h2></button>
    </div>  

    <div className="items222">
      <div>
        <h2>
                    {
                        film && 
                                <div> 
                                    <img src={film.image2}></img> 
                                    
                                </div>   
                                // <div style={{ 
                                //   backgroundImage: `url("${film.image2}")` 
                                // }}>
                                //   Hello World
                                // </div>      
                    }
        </h2>
      </div>
    </div>


    <div className="items333">
        <button className="button1" onClick={() => id >= 4 ? setId(1) : setId(id => id+1) }><h2>  next  </h2></button>
    </div>   

    <div className="items444">
        {
            film && <div > 
                        <h1><Link className="linktext" to={`${film._id}`}>{film.title}</Link></h1>            
                    </div>         
        }
    </div>

    </div >   
</div>
)}

export default MainFilms;