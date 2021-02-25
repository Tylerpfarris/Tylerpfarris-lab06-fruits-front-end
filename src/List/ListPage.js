


import React, { Component } from 'react';
import { getFruits } from '../api-utils';
import { Link } from 'react-router-dom';
import style from './ListPage.module.css';
import Spinner from '../Spinner/Spinner.js';
export default class ListPage extends Component {

  state = {
      fruits: [],
      loading: false,
  }

    componentDidMount = async () => {

        this.setState({loading: true});
      const fruits = await getFruits();

    
    await this.setState({
        fruits: fruits,
        loading: false
    });
  
  } 
  render() {
    

    return (
      <div className={style.fruitList}>
        { this.state.loading && <Spinner />}
        <h1>FRUITS</h1>
        
        {this.state.fruits.map(fruit => <Link to={`/fruits/${fruit.id}`} key={fruit.name}> <div className={style.fruitDiv}><h2>{fruit.name}</h2>
          <p>{fruit.category}</p>
          <p>{fruit.flavor}</p>
          <p>{fruit.color}</p>
          <p>{fruit.grown_in}</p>
          <p>${fruit.price}</p>
          <p>{fruit.looks_weird
            ? 'it looks weird'
            : 'normal as f'}</p>
          </div>
          </Link>
        )}
        
      </div>
    )
  }
}