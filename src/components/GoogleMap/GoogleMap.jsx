import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';


const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 10,
    lng: 10,
  },
  zoom: 11,
};
const GoogleMap = (props) => {
  console.log(props);

  return (


  // Important! Always set the container height explicitly
    <div style={{ height: '300px', width: '300px' }}>
      <GoogleMapReact
         // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={({
        lat: parseFloat(props.latitude),
        lng: parseFloat(props.longitude),
      })}
        center={({
          lat: parseFloat(props.latitude),
          lng: parseFloat(props.longitude),
        })}
        otherwise={console.log(props)}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={props.latitude}
          lng={props.latitude}
          text="Echmiadzin"
        />
      </GoogleMapReact>
    </div>
  );
};
AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GoogleMap;
