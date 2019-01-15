import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Controls.css';

class Controls extends Component {

    static defaultProps = {
        startTimer: () => alert('startTimer'),
        stopTimer: () => alert('stopTimer'),
        resetTimer: () => alert('resetTimer'),
        status: null,
        canStart: false,
    }

    render(){
            return (
            <div className="">
                <div className="d-flex flex-row">
                    <div className="">
                        <div className="controls btn-group">
                            {
                                this.props.status !== 'started' &&
                                <button className="btn btn-lg btn-success"
                                    disabled={!this.props.canStart}
                                    onClick={this.props.startTimer}>
                                    <div className="text-right">
                                        <i className="fa fa-play fa-2x mr-2 mb-3" />
                                    </div>
                                </button>
                            }

                            {
                                this.props.status === 'started' &&
                                <button className="btn btn-lg btn-dark"
                                    onClick={this.props.stopTimer}>
                                    <div className="text-right">
                                        <i className="fa fa-stop fa-2x mr-2 mb-3" />
                                    </div>
                                </button>
                            }

                            <button className="btn btn-lg btn-primary"
                                onClick={this.props.resetTimer}>
                                <div className="text-left">
                                    <i className="fa fa-refresh fa-2x ml-2 mb-3" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Controls;