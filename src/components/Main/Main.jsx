import React from 'react';
import AppBar from 'material-ui/AppBar';

import Search from '../Search';
import Events from '../Events';
import GoogleMap from '../GoogleMap';


const Main = () => (

  <div>
    <AppBar title="My AppBar" />
    <Search />
    <GoogleMap />
    <Events />

  </div>
);

export default Main;
