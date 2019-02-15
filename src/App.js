import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import JobsListPage from './components/JobsListPage';
import HeaderBar from './components/HeaderBar';
import JobDescriptionPage from './components/JobDescriptionPage';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { blue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: indigo[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <MuiThemeProvider theme={theme}>
          <HeaderBar />
          
            <Switch>
                <Route exact path='/' component={ JobsListPage } />
                <Route exact path='/jobs-description/:jobsId' component={ JobDescriptionPage } />
            </Switch>
        
        </MuiThemeProvider>
      </div>
      </Router>
    );
  }
}

export default App;
