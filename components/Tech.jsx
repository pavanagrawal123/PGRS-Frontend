import React, { Component } from 'react';
import { firebase } from '../firebase';
export default class Tech extends Component {
    constructor() {
        super();
        this.mark=this.mark.bind(this);
    }
    render() {
        return (
        <div className="row">
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{this.props.name} - {this.props.department}
                        </span>
                        <p>Distance: {this.props.distance} </p>
                    </div>
                    <div onClick={this.mark} className="card-action">
                        <a  href="#">Dispatch Engineer</a>
                    </div>
                </div>
            </div>
        </div>
        )
    }
    mark() {
        firebase.blah.ref(this.props.loc.key + "/status").set("Dispatched");

    }
}