import React, { Component } from 'react'
import Slider from './Slider'
import Sidebar from './Sidebar'
import Articles from './Articles'

export default class Home extends Component {
    // Metodo render (Se encargara de mostrar la vista al usuario)
    render() {
        return (
            <div id="home">
                <Slider
                    title="Bienvenido al Curso de ReactJS NRC 53848 - 53849"
                    curso="Universidad Pontificia Bolivariana - Desarrollo de Aplicaciones WEB"
                    btn="Ir al Blog"
                    size="slider-big"
                />
                <div className="center">
                    <div id="content">
                        <Articles
                            home="true"
                        />
                    </div>

                    <Sidebar />

                </div>
            </div>
        )
    }
}
