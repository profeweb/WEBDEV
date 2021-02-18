import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Social extends Component {

    render() {

        return (
            <div className="social">
                <a href="https://github.com/" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'github']} size="4x" className="icona" />
                </a>
                <a href="https://instagram.com/" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'instagram']} size="4x" className="icona" />
                </a>
                <a href="https://facebook.com/" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'facebook']} size="4x" className="icona" />
                </a>
                <a href="https://linkedin.com/" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x" className="icona" />
                </a>
                <a href="https://medium.com/" target="_blank" >
                    <FontAwesomeIcon icon={['fab', 'medium']} size="4x" className="icona" />
                </a>
            </div>
        )
    }
}
    
export default Social;