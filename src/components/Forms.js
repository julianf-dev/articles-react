import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Slider from './Slider'

export default class Forms extends Component {

    state = {
        user: {}
    }

    //Manejo del estaoad mediante referencia
    nombreRef = React.createRef()
    apellidosRef = React.createRef()
    bioRef = React.createRef()
    generoHombreRef = React.createRef()
    generoMujerRef = React.createRef()
    generoOtroRef = React.createRef()

    submitForm = (e) => {
        e.preventDefault();
        var genero = ''
        if (this.generoHombreRef.current.checked) {
            genero = this.generoHombreRef.current.value
        } else if (this.generoMujerRef.current.checked) {
            genero = this.generoMujerRef.current.value
        } else {
            genero = this.generoOtroRef.current.value
        }

        var user = {
            nombre: this.nombreRef.current.value,
            apellidos: this.apellidosRef.current.value,
            biografia: this.bioRef.current.value,
            genero: genero
        }

        this.setState({
            user: user
        })
        console.log(user)
    }

    render() {
        if(this.state.user.nombre){
            var user = this.state.user
        }
        return (
            <div id="home">
                <Slider
                    title="Form"
                    size="slider-small"
                />
                <div className="center">
                    <div id="content">
                        {
                            this.state.user.nombre && this.state.user.apellidos && this.state.user.biografia &&
                            this.state.user.genero &&
                            <div id="data">
                                <p>Nombre: <strong> {user.nombre}</strong></p>
                                <p>Apellido: <strong> {user.apellidos}</strong></p>
                                <p>Biografia: <strong> {user.biografia}</strong></p>
                                <p>Genero: <strong> {user.genero}</strong></p>
                            </div>
                        }

                        <form className="mid-form" onSubmit={this.submitForm}>
                            <div className="form-group">
                                <label name="nombre">Nombre</label>
                                <input type="text" name="nombre" ref={this.nombreRef} />
                            </div>
                            <div className="form-group">
                                <label name="apellido">Apellido</label>
                                <input type="text" name="apellido" ref={this.apellidosRef} />
                            </div>
                            <div className="form-group">
                                <label name="bio">Biografia</label>
                                <textarea name="bio" ref={this.bioRef}></textarea>
                            </div>
                            <div className="form-group radibuttons">
                                <input type="radio" name="genero" value="hombre" ref={this.generoHombreRef} />Hombre
                                <input type="radio" name="genero" value="mujer" ref={this.generoMujerRef} />Mujer
                                <input type="radio" name="genero" value="otro" ref={this.generoOtroRef} />Otro
                            </div>
                            {/*  <!--LIMPIAR FLOTADOS--> */}
                            <div className="clearfix">
                            </div>
                            <input type="submit" value="Enviar" className="btn btn-success" />
                        </form>
                    </div>
                    <Sidebar
                        blog="false"
                    />
                </div>
            </div>
        )
    }
}
