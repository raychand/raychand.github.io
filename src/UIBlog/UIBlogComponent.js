import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './UIBlog.css';

class UIBlogComponent extends Component {
    render(){
        return(
            <div>    
                <ul className='posts'>
                    <li>
                        <Link to='/' >Internationlization in React  </Link>
                        <span> September 2017</span>
                    </li>
                    <li>
                        <Link to='/' >Performance Analysis - Auditing</Link>
                        <span> August 2017</span>
                    </li>
                    <li>
                        <Link to='/' >Redux & Redux Thunks  </Link>
                        <span> July 2017</span>
                    </li>
                    <li>
                        <Link to='/' >React Router  notes</Link>
                        <span> June 2017</span>
                    </li>
                    <li>
                        <Link to='/' >React JS  notes</Link>
                        <span> May 2017</span>
                    </li>
                    <li>
                        <Link to='/' >Advanced Javascript topics   </Link>
                        <span> April 2017</span>
                    </li>
                    <li>
                        <Link to='/' >HTML, CSS  </Link>
                        <span> March 2017</span>
                    </li>
                </ul>   
                
            </div>
        )
    }
}

export default UIBlogComponent;