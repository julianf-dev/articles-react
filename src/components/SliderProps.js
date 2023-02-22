import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class SliderProps extends Component {
    // Metodo render (Se encargara de mostrar la vista al usuario)
    render() {
        console.log(this.props);
        return (
            <div>
                <div id="slider" className="slider-big">
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.grupos}</h2>
                    <NavLink to="index.html" className="btn-white">Ir al Blog</NavLink>
                </div>

                {/*LIMPIAR FLOTADOS*/}
                <div className="clearfix">

                </div>
            </div>
        )
    }
}