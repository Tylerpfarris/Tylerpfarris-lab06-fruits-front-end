import React, { Component } from 'react'
import { getCategories, getFruit, updateFruit, getCategoryID, deleteFruit } from '../api-utils.js';
import style from '../Create/CreatePage.module.css';
export default class DetailsPage extends Component {
    state = {
        name: '',
        category_id: this.props.match.params.fruitId,
        categories: [],
        category: '',
        flavor: '',
        color: '',
        grown_in: '',
        price: 0,
        looks_weird: false,
        
    }

    componentDidMount = async () => {
        const categories = await getCategories();

        const fruit = await getFruit(this.props.match.params.fruitId)

        const category_id = getCategoryID(fruit, categories);

        this.setState({
            ...fruit,
            category_id,
            categories
        })
    }

    handleNameChange = (e) => this.setState({ name: e.target.value });

    handleCategoryChange = (e) => this.setState({
        category_id: Number(e.target.value),
        category: e.target.value
    });

    handleFlavorChange = (e) => this.setState({ flavor: e.target.value });

    handleColorChange = (e) => this.setState({ color: e.target.value });

    handleGrownInChange = (e) => this.setState({ grown_in: e.target.value });

    handlePriceChange = (e) => this.setState({ price: Number(e.target.value) });

    handleLooksWeirdChange = () => this.setState({ looks_weird: !this.state.looks_weird });

    handleSubmit = async (e) => {
        e.preventDefault();
        await updateFruit(this.props.match.params.fruitId, this.state);
        this.props.history.push('/fruits');
        
    }

    handleDelete = async (e) => {
        await deleteFruit(this.props.match.params.fruitId);
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
                        <select value={this.state.category} onChange={this.handleCategoryChange}> {
                            this.state.categories.map(category =>
                                <option key={category.name_type} value={this.props.category_id}
                                        selected={this.state.category === category.id}>{category.name_type}</option>)}
                        </select> 
                    </label>
                    <label>
                        Flavor
                        <textarea value={this.state.flavor} onChange={this.handleFlavorChange}></textarea> 
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
                        <input value={this.state.looks_weird} type="checkbox" checked={this.state.looks_weird} onChange={this.handleLooksWeirdChange}></input> 
                    </label>
                    <button>Update</button> 
                </form>
                <button className={style.deleteButton} onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}