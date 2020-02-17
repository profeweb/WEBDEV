import React, { Component } from 'react';
import { Map, TileLayer, GeoJSON } from 'react-leaflet';

import './data.js';
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
                <GeoJSON data={getGeoJson()} />
            </Map>
        );
    }
}

function getGeoJson() {
return {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": [
            [
              2.9992675781249996,
              39.71458175667416
            ],
            [
              3.2148742675781246,
              39.579231826349016
            ],
            [
              2.6971435546875,
              39.56758783088905
            ],
            [
              2.82623291015625,
              39.631076770083666
            ],
            [
              3.0047607421875,
              39.61838363831915
            ],
            [
              2.997894287109375,
              39.71035608240133
            ]
          ]
        }
      }
    ]
  }
}

export default Mapa;