import React, {Component} from 'react';
import "./film.css";

class Film extends Component {
    render() {

        let {item} = this.props;

        return (
            <div className='oneFilmBlock'>
                <div className='oneFilmText'>
                {item.title}. {item.image}
                    {/* {item.id}. {item.title} - {item.completed} */}
                </div>
                

            </div>
        );
    }
}

export default Film;