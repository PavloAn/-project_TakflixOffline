import React, { Component } from "react";
import {Link} from "react-router-dom";
import './afisha.css';

class AfishaFilm extends Component {


    render() {


        // const location = useLocation();
        // const { from } = location.state;

        let {item} = this.props;


        //console.console.log(this.params);

        return (
            <div>
                {/* <div>{item._id}</div> */}
                <div className='mainDiv'>
                    <img src={item.image} align="top"></img >  <h4><Link className="linktext" to={`${item._id}`}>{item.title}</Link></h4>

                    {/* <p><img src={item.image} align="top"></img >{item.title}</p>  <h4><Link className="linktext" to={`${item._id}`}>{item.title}</Link></h4> */}
                    {/* <hr/> */}
                </div>
                {/* <div className='mainDiv'><h6><Link to={`${item._id}`}>{item.title}</Link></h6></div> */}
                <hr/>

                {/* {item.id}. {item.title} -  */}
                {/* <Link to={`${item.id}`}>Details</Link> */}

                

                
            </div>
        )
    }
}


export default AfishaFilm;



// import React from "react";
// import {Link} from "react-router-dom";


// const AfishaFilm = (props) => {


//     let {item} = this.props;

//     return (
//             <div>
                
//                 {item.id}. {item.title} - 
//                 <Link to={`${item.id}`}>Details</Link>

                
//             </div>
//     )
// }

// export {AfishaFilm};