import { connect } from 'react-redux';
import Events from './Events';

const mapStateToProps = state => ({
  events: state.search.events,
});

export default connect(mapStateToProps)(Events);
