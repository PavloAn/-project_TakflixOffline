import React, { Component } from "react";
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import Afisha from "../afisha/afisha";
import AfishaFilm from "../afisha/afishaFilm";
import FullAfishaFilm from "../afisha/fullAfishaFilm";


class Login extends Component {
    render() {
        return (
            <div>
                <Link to='/'>

                </Link>

                {/* <Link to='/afisha/:id'>
                    Контакти
                </Link> */}

                {/* <Routes> */}


                    <Outlet/>

                        {/* <Route 
                            path='/' 
                            element={ <Afisha/> } 
                        />
                            


                        <Route
                            path='/:id'
                            element = { <FullAfishaFilm/> } 
                        />  

                        <Route
                            path="*"
                            element = { <FullAfishaFilm/> } 
                        /> */}
  
                {/* </Routes> */}
            </div>
        )
    }
}


export default Login;





// const Login = () => {
//     return (
//         <div>
//             <h2>Login</h2>
//         </div>
//     )
// }

// export default Login;