import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
  center: {
    lat: 23.022505,
    lng: 72.57136209999999,
  },
  zoom: 11,
};
const GoogleMap = () => (


  // Important! Always set the container height explicitly
  <div style={{ height: '100vh', width: '50%' }}>
    <GoogleMapReact
         // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    >
      <AnyReactComponent
        lat={59.955413}
        lng={30.337844}
        text="Echmiadzin"
      />
    </GoogleMapReact>
  </div>
);


export default GoogleMap;
