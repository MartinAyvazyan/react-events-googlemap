import { connect } from 'react-redux';
import Events from './Events';
import { searchInMap } from '../../modules/map';

const mapStateToProps = state => ({
  events: state.search.events,
});

const mapDispatchToProps = {
  handleClick: searchInMap,
};


export default connect(mapStateToProps, mapDispatchToProps)(Events);
