import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import JobsList from './components/JobsList';
import HeaderBar from './components/HeaderBar';


export default ({theme}) => (
    
    <React.Fragment children={theme} >
        <HeaderBar theme={theme} />
        <Router>
            <Switch>
                <Route exact path='/' component={ JobsList } />
                <Route exact path='/description' component={ JobsList } />
            </Switch>
        </Router>
     </React.Fragment>
  )