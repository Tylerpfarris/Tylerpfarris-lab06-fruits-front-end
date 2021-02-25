import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
export default class Header extends Component {
    render() {
        return (
            <div className={style.linkDiv}>
                <label><NavLink exact activeClassName="active" to="/">Home</NavLink></label>
                <label><NavLink exact activeClassName="active" to="/fruits">List</NavLink></label>
                <label><NavLink exact activeClassName="active" to="/create">Create</NavLink></label>
            </div>
        )
    }
}
