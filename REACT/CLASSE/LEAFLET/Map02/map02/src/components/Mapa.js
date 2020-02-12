import React, { Component } from 'react';
import { Map, TileLayer, CircleMarker, Tooltip } from 'react-leaflet';

import data from './data.js';
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
                {
                    data.city.map((city,k) => {
                        return (
                            <CircleMarker
                              key={k}
                              center={[city["coordinates"][1], city["coordinates"][0]]}
                              radius={20 * Math.log(city["population"] / 10000000)}
                              fillOpacity={0.5}
                              stroke={false}
                            >
                              <Tooltip direction="left" offset={[-8, -2]} opacity={1}>
                                <span>{city['name'] + ': ' + 'Population' + ' ' + city['population']}</span>
                              </Tooltip>
                            </CircleMarker>
                            )
                        })
                }
            </Map>
        );
    }
}

export default Mapa;