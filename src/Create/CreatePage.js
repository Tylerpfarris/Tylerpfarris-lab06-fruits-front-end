import React, { Component } from 'react'
import { makeFruit } from '../api-utils.js';
import style from './CreatePage.module.css';
export default class CreatePage extends Component {
    state = {
        name: '',
        category: [],
        category_id: 1,
        flavor: '',
        color: '',
        grown_in: '',
        price: 0,
        looks_weird: false,
        
    }



    handleNameChange = (e) => this.setState({ name: e.target.value });

    handleCategoryChange = (e) => this.setState({
        category_id: Number(e.target.value),
        category: e.target.value,
    });

    handleFlavorChange = (e) => this.setState({ flavor: e.target.value });

    handleColorChange = (e) => this.setState({ color: e.target.value });

    handleGrownInChange = (e) => this.setState({ grown_in: e.target.value });

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) });

    handleLooksWeirdChange = () => this.setState({ looks_weird: !this.state.looks_weird });

    handleSubmit = async (e) => {
        e.preventDefault();
        await makeFruit(this.state);
        this.props.history.push('/fruits');
        
    }
    render() {
console.log(this.state)

        return (
            <div>
                <form className={style.form} onSubmit={this.handleSubmit}>
                    <label>
                        Fruit Name
                        <input value={this.state.name} onChange={this.handleNameChange}></input> 
                    </label>
                    <label>
                        Category
                        <select value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value={1}>Tart</option>
                            <option value={2}>Sweet</option>
                            <option value={3}>Floral</option>
                        </select> 
                    </label>
                    <label>
                        Flavor
                        <input value={this.state.flavor} onChange={this.handleFlavorChange}></input> 
                    </label>
                    <label>
                        Color
                        <input value={this.state.color} onChange={this.handleColorChange}></input> 
                    </label>
                    <label>
                        Grown In
                        <input value={this.state.grown_in} onChange={this.handleGrownInChange}></input> 
                    </label>
                    <label>
                        Price
                        <input value={this.state.price} type="number" onChange={this.handlePriceChange}></input> 
                    </label>
                    <label>
                        Looks Weird
                        <input value={this.state.looks_weird} type="checkbox" onChange={this.handleLooksWeirdChange}></input> 
                    </label>
                    <button>Create Fruit</button>
                </form>
            </div>
        )
    }
}
