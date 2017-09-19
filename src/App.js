import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import HomeComponent from './Home/HomeComponent';
import UIBlogComponent from './UIBlog/UIBlogComponent';
import PersonalBlogComponent from './PersonalBlog/PersonalBlogComponent';
import PersonalPost1 from './PersonalBlog/PersonalPost1';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className='App'>
            <h1> RayChand </h1>
            <ul className='routes'>
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/UI_experiences' >WebDevelopment_notes</Link></li>
              <li><Link to='/Random_Thoughts' >Random_Thoughts</Link></li>
            </ul>
            <Route exact path='/' component={HomeComponent}/>
            <Route path='/UI_experiences' component={UIBlogComponent}/>
            <Route path='/Random_Thoughts' component={PersonalBlogComponent}/>
            <Route path='/post1' component={PersonalPost1}/>
          </div>
        </BrowserRouter>
    </MuiThemeProvider> 
    );
  }
}

export default App;
