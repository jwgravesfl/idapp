import React, { Component } from 'react';

import axios from 'axios';

const pictureMainDivStyle = {
  paddingTop: "7vh"
}

export default class Picture extends Component {
  state = {
    photos: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
      .then(res => {
        const photos = res.data;
        this.setState({ photos });
      })
  }

  render() {
    return (
      <div style={ pictureMainDivStyle }>
        
          <ul>
            { this.state.photos.map(photos => <li key={photos.id}>{photos.title} <img src={photos.url} alt="" /></li>)} 
          </ul>
        
      </div>
    )
  }
}