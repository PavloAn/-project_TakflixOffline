import React, {Component} from 'react';
import './film.css';

class Film extends Component {
    render() {

        let {item} = this.props;

        

        return (
            <div className='oneFilmBlock'>
                <div className='oneFilmText'>


                <div><img src={item.image}></img></div>
                <div><h6>{item.title}</h6></div>
                {/* {item.title}. {item.producer} */}
                    {/* {item.id}. {item.title} - {item.completed} */}
                </div>
                

            </div>
        );
    }
}

export default Film;