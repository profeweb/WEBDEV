import React, {Component} from 'react';
import DateTime from './lib/DateTime';

import './Display.css';

class Display extends Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="d-flex flex-row">
                    <div className="col-md-4 mx-auto">
                        <div className="display">
                            <div className="display-time">{DateTime.toTimeString(this.props.date)}</div>
                            { this.props.isDateVisible && <div className="display-date">{DateTime.toDateString(this.props.date)}</div> }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Display.defaultProps = {
    date: new Date(),
    isDateVisible: true
};

export default Display;