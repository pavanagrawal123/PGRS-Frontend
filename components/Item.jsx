import React, { Component } from "react";
import { connect } from "react-redux";

export default class Item extends Component {

  render() {
    const { item } = this.props;
    return (
      <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
        <h4>
          {item.dept}
            <i className="large material-icons">done</i>
        </h4>
      </div>
    );
  }
}
