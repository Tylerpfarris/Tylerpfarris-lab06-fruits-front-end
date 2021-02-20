import './App.css'
import request from 'superagent';

import React, { Component } from 'react';

export default class App extends Component {

  state = {
    fruitsData: [],
  }

  componentDidMount = async () => {
   const data = await request.get(`https://frozen-anchorage-14022.herokuapp.com/fruits`);

    console.log(data.body)
    await this.setState({
      fruitsData: data.body,
    });
   console.log(this.state.fruitsData);
  } 
  render() {
    

    return (
      <div>
        <h1>FRUITS</h1>
        
        {this.state.fruitsData.map(fruit => <div><h2>{fruit.name}</h2>
          <p>{fruit.category}</p>
          <p>{fruit.flavor}</p>
          <p>{fruit.color}</p>
          <p>{fruit.grown_in}</p>
          <p>${fruit.price}</p>
          <p>{fruit.looks_weird}</p>
          </div>)}
        
      </div>
    )
  }
}
