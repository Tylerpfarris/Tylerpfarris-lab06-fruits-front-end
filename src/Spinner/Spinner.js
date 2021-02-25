import React, { Component } from 'react'
import style from './Spinner.module.css';

export default class Spinner extends Component {
    render() {
        return (
            <>
                <div className={style.spinner}></div>   
            </>
        )
    }
}
