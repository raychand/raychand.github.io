import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './PersonalBlog.css';

class PersonalBlogComponent extends Component {
    render(){
        return(
            <div>
                <ul className='posts'>
                    <li>
                        <Link to='/post1' > A thought worth evaluating ?</Link>
                        <span> September 2017</span>
                    </li>
                </ul>   
            </div>
        )
    }
}

export default PersonalBlogComponent;