import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Map extends Component{
  constructor(props) {
    super(props);

    const {lat, lng} = this.props.initialCenter;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      }
    }
  }
  componentDidMount() {
            navigator.geolocation.getCurrentPosition((pos) => {
                const coords = pos.coords;
                this.setState({
                    currentLocation: {
                        lat: coords.latitude,
                        lng: coords.longitude
                    }
                })
            })
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props)
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }
  }

  recenterMap() {
    const map = this.map;
    const curr = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;
    if (map) {
        let center = new maps.LatLng(curr.lat, curr.lng)
        map.panTo(center)
    }
  }
  


  loadMap(){
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let {initialCenter, zoom} = this.props;
      const {lat, lng} = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  this.forceUpdate();
  }
  renderChildren() {
    const {children} = this.props;

    if (!children) return;

    return React.Children.map(children, c => {
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    })
  }
  
  render(){
const style = {
      width: '100%',
      height: '300px',
      background: 'gray'
    };
    return (
      <div style={style} ref="map">
        loading Map...
        {this.renderChildren()}
      </div>
    );
  }
}
export class Marker extends Component {
  componentDidUpdate(prevProps) {
    if ((this.props.map !== prevProps.map) ||
      (this.props.position !== prevProps.position)) {
        this.renderMarker();
    }
  }
  renderMarker() {
      let {
        map, google, position, mapCenter
      } = this.props;

      let pos = position || mapCenter;
      position = new google.maps.LatLng(pos.lat, pos.lng);
      
      const pref = {
        map: map,
        position: position
      };
      this.marker = new google.maps.Marker(pref);
  }
  render() {
    return null;
  }
}
Marker.propTypes = {
  position: React.PropTypes.object,
  map: React.PropTypes.object
}
Map.propTypes = {
  google: React.PropTypes.object,
  zoom: React.PropTypes.number,
  initialCenter: React.PropTypes.object,
  centerAroundCurrentLocation: React.PropTypes.bool
}
Map.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 40.539895,
    lng: -111.956863
  },
  centerAroundCurrentLocation: false
}

export default Map;