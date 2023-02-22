import React, { Component } from 'react'

export default class Receta extends Component {
    render() {

        //objeto literal
        const receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso'],
            calorias: 400
        }

        return (
            <div>
                <h3> {`Nombre: ${receta.nombre}`}</h3>
                <h3> {`Calorias: ${receta.ingredientes}`} </h3>
                <h3> {`Ingredientes: `} </h3>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => { 
                            console.log(ingrediente);
                            return ( 
                                <li key={i}>
                                    {ingrediente}                                        
                                </li>
                            )                                                   
                        })
                    }
                </ol>
            </div>
        )
    }
}
