import React, { Component } from 'react'

export default class Estado extends Component {

    //Propiedad del componente
    state = { 
        contador : 0
    }

    sumar = (e) => {
        this.setState({
            contador : (this.state.contador + 1)
        })
    }

    restar = (e) => {
        this.setState({
            contador : (this.state.contador - 1)
        })
    }

    render() {
        return (
            <div className="content">
                <h3> Contador: {this.state.contador}</h3>
                <button type="submit" onClick={this.sumar}>
                    Sumar
                </button>
                <input type="button" value="Restar" onClick={this.restar}/>
            </div>
        )
    }
}

