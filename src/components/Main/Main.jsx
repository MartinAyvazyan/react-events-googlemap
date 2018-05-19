import React from 'react';
import AppBar from 'material-ui/AppBar';

import Search from '../Search';
import Events from '../Events';
import GoogleMap from '../GoogleMap';


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
