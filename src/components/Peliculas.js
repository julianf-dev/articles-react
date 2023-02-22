import React, { Component } from 'react'
import Pelicula from './Pelicula';
import Slider from './Slider';
import Sidebar from './Sidebar';

export default class Peliculas extends Component {

    
    state =  {
        peliculas : [{
            title: "Batman VS Superman",
            image: "https://clipart.info/images/minicovers/1516943360superman-vs-batman-logo-png.png"
        },
        {
            title: "Gran Torino",
            image: "https://ctl.s6img.com/society6/img/MkJVvI77h0Psdz3Yl9HhtDp8dzM/w_125/prints/~artwork/s6-0002/asset_11/203888_0l95Pw25Q9/~~/gran-torino-minimal-poster-prints.jpg"
        },
        {
            title: "Spiderman",
            image: "https://images-na.ssl-images-amazon.com/images/I/71yTNUTYmiL._AC_UL160_SR106,160_.jpg"
        }
    ],
        propietario: "NRC 53849"
    }
    
    render() {
        return (
            <React.Fragment>
                <Slider
                title="Peliculas"
                size="slider-small"
                />

                <div className="center">
                    <div id="content">
                        <h1>Listados de peliculas</h1>
                        <p>Seleccion de peliculas favoritas de {this.state.propietario}</p>
                        {/*Crear el componente de peliclas*/}
                        {
                            this.state.peliculas.map((pelicula, i) => {
                                return (
                                    <Pelicula key={i} pelicula={pelicula} />   
                                )  
                            })
                        }
                    </div>
                    <Sidebar
                        blog="false"
                    />

                </div>
            </React.Fragment>
        )
    }
}
