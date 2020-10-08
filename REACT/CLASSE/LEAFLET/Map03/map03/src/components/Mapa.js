import React, { Component } from 'react';
import { Map, TileLayer, Popup, Marker } from 'react-leaflet';

import './Mapa.css';
import MyGeoJSON from './MyGeoJSON.js';



class Mapa extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        const position = [this.props.lat, this.props.lng]
        
        return (
            <Map center={position} zoom={this.props.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MyGeoJSON />
            </Map>
        );
    }
}

export default Mapa;