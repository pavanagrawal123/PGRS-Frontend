import React, { Component } from "react";
import { itemsRef } from '../firebase';
import Tech from '../components/Tech';
export default class Item extends Component {
    constructor() {
        super();
        this.state = {
            'items': []
        }
    }
    distance(lat1, lon1, lat2, lon2) {
        let toRad = function(ra) {
            return ra * Math.PI / 180;
         }
         
         
         var R = 6371; // km 
         //has a problem with the .toRad() method below.
         var x1 = lat2-lat1;
         var dLat = toRad(x1);  
         var x2 = lon2-lon1;
         var dLon = toRad(x2);  
         var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                         Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
                         Math.sin(dLon/2) * Math.sin(dLon/2);  
         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
         return Math.ceil(R * c); 
    }
    componentDidMount() {
        if (typeof this.props.dept !== 'undefined') {
            itemsRef.child('Technicians').orderByChild('department').equalTo(this.props.dept).on('value', (snapshot) => {        
                //itemsRef.child('Technicians').on('value', (snapshot) => {
                    let items = snapshot.val();
                    let newState = [];
                    for (let item in items) {
                        let dis = this.distance(items[item].lat, items[item].longitude, this.props.lat, this.props.lon);
                        newState.push({
                            distance: dis + ' meters',
                            item: items[item]
                        });
                    }
                    this.setState({
                        items: newState
                    }); 
                });
        }
    }
    render() {
        return(
        //const { item } = this.props;
        <div>
            { this.state.items.map((item) => {
                return (
                    <Tech loc={this.props.loc} distance={item.distance} {...item.item} />
                )
            }) } 
        </div>
        )
    }
}
