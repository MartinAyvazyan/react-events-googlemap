import React from 'react';
import AppBar from 'material-ui/AppBar';

import Search from '../../app/containers/Search';
import Events from '../../app/containers/Events';
import GoogleMap from '../../app/containers/GoogleMap';

const Main = () => (
  <div>
    <AppBar title="My AppBar" />
    <Search />
    <div className="main">
      <div className="googlemap">
        <GoogleMap />
      </div>
      <div className="events">
        <Events />
      </div>
    </div>
  </div>
);

export default Main;
