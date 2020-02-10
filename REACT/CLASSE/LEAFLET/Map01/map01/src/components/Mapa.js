import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import './Mapa.css';


class Mapa extends Component {

    constructor(props) {
        super();
    }

    render() {
        const position = [this.props.lat, this.props.lng]
        return (
            <Map center={position} zoom={this.props.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup> PopUp en React+Leaflet!!!</Popup>
                </Marker>
            </Map>
        );
    }
}

export default Mapa;