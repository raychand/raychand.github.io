import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class PersonalPost1 extends Component {
    render(){
        return(
            <div className='homeConatiner'>
                <p> Hello world </p>
                  
                <div className='backLink'>
                    <Link to='/Random_Thoughts' > {'<---'} Back</Link>
                    {/* <Link to='/post2' > Next</Link> */}
                </div>
            </div>
        )
    }
}

export default PersonalPost1;