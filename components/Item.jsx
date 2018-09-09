import React, { Component } from "react";
import { connect } from "react-redux";
import Tech from  '../components/Techs'
export default class Item extends Component {
    constructor() {
        super();
        this.state= {
            rand: Math.floor(Math.random()*10000)
        }
        this.componentDidMount=this.componentDidMount.bind(this);

    }
    componentDidMount() {
        var land = this.state.rand;
        $(document).ready(function(){
            $('.' + land).modal();
          });
    }
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
          <p>Sttus: {this.props.status} </p>
        </div>
        <div className="card-action">
          <a className="modal-trigger" href={'#' + this.state.rand}>Dispatch Engineer</a>
          <a href="#">Mark issue as fixed</a>
        </div>
      </div>
    </div>
   


  <div id={this.state.rand} className={"modal " + this.state.rand}>
    <div className="modal-content">
      <h4>List of Techs</h4>
      <Tech loc={this.props.loc} lat={this.props.lat} lon={this.props.longitude} />
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-close waves-effect waves-green btn-flat">Done</a>
    </div>
  </div>

    
  </div>
    );
  }
}
