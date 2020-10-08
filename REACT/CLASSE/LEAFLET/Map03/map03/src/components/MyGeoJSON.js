import React, { Component, Fragment } from 'react';
import { Popup, Marker } from 'react-leaflet';
import axios from 'axios';

const API = "http://www.goatrails.dawman.info/api/get/first-point-route/all";


class MyGeoJSON extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rutes: null,
        };

    }

    async componentDidMount() {
      axios.get(API)
        .then(res => {
          const data = res.data;
          this.setState({ rutes:  data});
        })
    }

    render() {
        console.log(this.state.rutes);
        
        return (  this.state.rutes.map() );
    }
}

export default MyGeoJSON;