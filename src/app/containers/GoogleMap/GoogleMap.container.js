import { connect } from 'react-redux';

import GoogleMap from './GoogleMap';

const mapStateToProps = state => ({
  latitude: state.map.latitude,
  longitude: state.map.longitude,
});

export default connect(mapStateToProps)(GoogleMap);
