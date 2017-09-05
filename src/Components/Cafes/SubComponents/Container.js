import React, { Component } from 'react';
import GoogleApiComponent from './GoogleApiComponent';
import Map from './Map';
import {Marker} from './Map'

class Container extends Component{

  render(){
    const pos1 = {lat: 40.226039799999995, lng: -111.6708296}
    const pos2 = {lat: 40.026563, lng: -111.73439}
    return (
      <div className='map_contain'>
        <Map google={this.props.google}>
          <Marker />
          <Marker position={pos1} />
          <Marker position={pos2} />
        </Map>
      </div>
    );
  }
}
export default GoogleApiComponent({
  apiKey: 'AIzaSyAoNKptx2xp-KTzOzEaSNAYpgRERL2dvjY'
})(Container)