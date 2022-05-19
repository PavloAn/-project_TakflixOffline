import React, { Component } from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom';




class Main extends Component {
    render() {
        return (
            <div>
                <Link to='/'>

                </Link>



                    <Outlet/>

            </div>
        )
    }
}


export default Main;