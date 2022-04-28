import './App.css';
import React, {Component} from "react";
import { Routes, Route, Link } from 'react-router-dom';

import Films from './components/films/films';
//import AboutUs from './components/aboutUs/aboutUs';
import Contacts from './components/contacts/contacts';
import Login from './components/login/login';
import Main from './components/main/main';
import { ReactComponent as Logo } from './images/TAKFLIX_logo.svg';


class App extends Component {
//function App() {

  render() {
    return (

              <div className="containerGrid">
                  <div className="item1">
                      <nav>
                          <ul className="topmenu">

{/* 
                              <li>
                                  <div>
                                    <div className='takflixText'>Takflix</div>
                                    <div className='offlineText'>offline</div>
                                    
                                  </div>
                              </li> */}


                            {/* <li>
                                  <Link to='/full-film'>
                                      Фільм
                                  </Link>
                              </li>   */}

                              <li>
                                  <Link to='/'>
                                      Головна
                                  </Link>
                              </li>
  
                              <li>
                                  <Link to='/contacts'>
                                      Контакти
                                  </Link>
                              </li>
  
                              <li>
                                  <Link to='/films'>
                                      Фільми
                                  </Link>
                              </li>
  
                              <li>
                                  <Link to='/login'>
                                      Увійти
                                  </Link>
                              </li>


  
                            {/* 
                              <li id="BT">
  
                                  <div className="container-out">
                                      <div className="container-in">
                                          <div className="search-container">
                                              <div className="search-engine">
                                                  <input
                                                      type="input"
                                                      id="search-input"
                                                      autoComplete="off"
                                                      placeholder="Пошук"
                                                  />
                                              </div>
                                              {<div id="search-results"></div>}
                                              {<div id="search-data"></div>}
                                          </div>
                                      </div>
                                  </div>
                              </li>
                            */}

                            <li>
                                <div>
                                    <Logo/>
                                </div> 
                            </li>

                          </ul>
                      </nav>
  
  
                  </div>
                  <div className="item2">
  
                      <Routes>
                          <Route path='/' element={ <Main/> } />
                            
                          
                          <Route
                            path='/contacts'
                            element = { <Contacts/> } 
                          />  
  
                          <Route
                            path='/films'
                            element = { <Films/> }
                            // element = { <FullFilm/> }
                          />  
  
                          <Route
                            path='/login'
                            element = { <Login/> } 
                          />  

                          {/* <Route
                            path='/full-user'
                            element = { <FullFilm/> } 
                          />  */}

  
                          {/* <Route path={"/contacts"}>
                            <Contacts/>
                          </Route>
                               
                             
                          <Route path={"/films"}>
                            <Films/>
                          </Route>
                        
                          <Route path={"/login"}>
                            <Login/>
                          </Route>
                               */}
                       
  
  
                      </Routes>
  
  
                  </div>
                  <div className="item3">
                      Footer
                  </div>
  
              </div>
 
    );
  }
}

export default App;
