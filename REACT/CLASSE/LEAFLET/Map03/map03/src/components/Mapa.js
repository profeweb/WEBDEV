import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON, FeatureGroup } from 'react-leaflet';

import './Mapa.css';



class Mapa extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.rutes);
        const rutes = this.props.rutes;
        const position = [this.props.lat, this.props.lng]
        
        return (
            <Map center={position} zoom={this.props.zoom}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON key={1} data={rutes}></GeoJSON>
            </Map>
        );
    }
}

export default Mapa;