import React, { Component } from "react";
import { Panel } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import Modal, {closeStyle} from 'simple-react-modal'
import { Collapse } from 'react-bootstrap';
import { firebase } from '../firebase';
import { connect } from "react-redux";
import Tech from  '../components/Techs'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)

export default class Item extends Component {
    constructor() {
        super();
        this.state= {
            rand: Math.floor(Math.random()*10000)
        }
        this.componentDidMount=this.componentDidMount.bind(this);
        this.fix=this.fix.bind(this);
    }
    show(){
      this.setState({show: true})
    }
   
    close(){
      this.setState({show: false})
    }

    componentDidMount() {
        var land = this.state.rand;
        $(document).ready(function(){
            $('.' + land).modal();
          });
    }
  render() {
    var solved = this.props.status;
    //const { item } = this.props;
    return (
      <div>
      {solved!="Approved" &&
        <div className="row">
        <div className="col s12 m6 ">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.dept} - {this.props.details}
              <span className="blue badge" style={{borderRadius: '5px',  color: 'white'}}>Upvoted - {this.props.upvoted}</span>
              </span>
              <p>Authority: {this.props.authority} </p>
              <p>Date: {this.props.date} </p>
              <p>Status: {this.props.status} </p>
              <br/>
              <div>
                <Button variant="contained"  size="large" style={{color:'white',background:'#8d86a8'}} onClick={this.show.bind(this)}  >Problem Details </Button>
              </div>
              <Modal
                className="modal-content"
                
                containerClassName="test"
                closeOnOuterClick={true}
                show={this.state.show}
                onClose={this.close.bind(this)}>
          
                <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
                <div>{this.props.description}</div>
                <br/>
                <img src={this.props.photoUrl} width="100" height="100"></img>
        
              </Modal>
            </div>
            <div className="card-action">
              <a className="modal-trigger" href={'#' + this.state.rand}>Dispatch Technician</a>
            </div>
            <div className="card-action" onClick={this.fix}>
              <a href="#">Mark as fixed</a>
            </div>
          </div>
        </div>
    </div>
    }

      <div id={this.state.rand} className={"modal " + this.state.rand}>
        <div className="modal-content">

          <Tech loc={this.props.loc} lat={this.props.lat} lon={this.props.longitude} dept={this.props.dept} />
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Done</a>
        </div>
      </div>


    </div>
    );
  }

  fix(){
    firebase.blah.ref(this.props.loc.key + "/status").set('Fixed');
  }
}
