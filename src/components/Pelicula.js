import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Pelicula extends Component {

    render() {
        console.log(this.props);
        //traemos las propiedades de peliculas
        const {title, image} = this.props.pelicula
        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image }alt={title}/>
                </div>
                <h2>{title}</h2>
                <span className="date">
                    Hace 5 minutos
                </span>
                <NavLink to="/">Leer más</NavLink>
                <div className="clearfix"></div>
            </article>
        )
    }
}
