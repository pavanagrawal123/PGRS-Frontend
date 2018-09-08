import React, { Component } from "react";
import { connect } from "react-redux";

export default class Item extends Component {

  render() {
    //const { item } = this.props;
    return (
        <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">{this.props.dept} - {this.props.details}
          <span className="blue badge" style={{borderRadius: '5px',  color: 'white'}}>Upvoted - {this.props.upvoted}</span>
          </span>
          <p>Authority: {this.props.authority} </p>
          <p>Date: {this.props.date} </p>
        </div>
        <div className="card-action">
          <a href="#">Dispatch Engineer</a>
          <a href="#">Mark issue as fixed</a>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
