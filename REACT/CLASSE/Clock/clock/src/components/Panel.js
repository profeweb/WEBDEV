import React, { Component } from 'react';

import './Panel.css';

class Panel extends Component {

    constructor(props) {
        super();
    }

    static defaultProps = {
        dateOn: true,
        toggleDate: () => {}
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex flex-row">
                    <div className="col-md-4 mx-auto">
                        <div className="panel">                        
                            <label id="date-switch" className="switch">
                                <input type="checkbox" checked={this.props.dateOn} onChange={this.props.toggleDate}/>
                                <span className="slider round"></span>
                            </label>
                            <label className="panel-switch-text" htmlFor="date-switch">
                                <i className="fa fa-calendar"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Panel;