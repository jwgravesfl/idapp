import React, { Component } from 'react';
import AppBarNav from './components/AppBarNav'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Container from 'material-ui/Container';
 

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Container>
            <AppBarNav />
          </Container>
        </MuiThemeProvider>
        
      </div>
    );
  }
}

export default App;
