import React, { Component } from 'react';
import AppBarNav from './components/AppBarNav'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import Picture from './components/Picture'

import { Provider } from 'react-redux'

import Posts from './components/Posts'
import PostForm from './components/Postform'

import store from './store'
 
class App extends Component {
  render() {
    return (
      
      <Provider store={store}>
        <div>
          <MuiThemeProvider>
            <AppBarNav />
            <getCoffeeShops />
            <PostForm />
            <Posts />
            
          </MuiThemeProvider>
        </div>
      </Provider>
    );
  }
}

export default App;
