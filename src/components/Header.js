import React, { Component } from 'react'
import logo from '../assets/images/react-2.svg';
import {Link} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <div className="center">
                        <div id="logo">
                            <div>
                                <img src={logo} className="app-logo" alt="logotipo" />
                            </div>
                            <div>
                                <span id="brand">
                                    <strong>Curso</strong>ReactJS
                                </span>
                            </div>
                        </div>
                        <nav id="menu">
                            <ul>
                                <li>
                                    <Link   to="/home"  className="active">Inicio</Link >
                                </li>
                                <li>
                                    <Link  to="/blog"  className="active">Blog</Link>
                                </li>
                                <li>
                                    <Link   to="/formulario"  className="active">Formulario</Link >
                                </li>
                                <li>
                                    <Link   to="/estado" className="active" >Estado</Link >
                                </li>
                                <li>    
                                    <Link   to="/peliculas"  className="active">Peliculas</Link >
                                </li>
                            </ul>
                        </nav>
                        <div className="clearfix">

                        </div>

                    </div>
                </header>
            </div>
        )
    }
}
