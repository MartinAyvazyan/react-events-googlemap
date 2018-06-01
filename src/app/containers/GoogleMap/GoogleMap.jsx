import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';

const AnyReactComponent = () => (
  <i className="material-icons" style={{ fontSize: '48px', color: 'red' }}>
    add_location
  </i>
);

const defaultProps = {
  center: {
    lat: 10,
    lng: 10,
  },
  zoom: 15,
};

const GoogleMap = props => (
  // Important! Always set the container height explicitly
  <div style={{ height: '400px', width: '1350px' }}>
    <GoogleMapReact
      // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      defaultCenter={{
        lat: parseFloat(props.latitude),
        lng: parseFloat(props.longitude),
      }}
      center={{
        lat: parseFloat(props.latitude),
        lng: parseFloat(props.longitude),
      }}
      otherwise={console.log(props)}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent lat={parseFloat(props.latitude)} lng={parseFloat(props.longitude)} />
    </GoogleMapReact>
  </div>
);

GoogleMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
};

export default GoogleMap;
