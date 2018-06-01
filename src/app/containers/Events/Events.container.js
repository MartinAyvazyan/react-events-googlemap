import { connect } from 'react-redux';
import Events from './Events';
import { onButtonCLick } from '../../modules/map/mapActions';

const mapStateToProps = state => ({
  events: state.search.events,
  buttonCLicked: state.map.buttonCLicked,
});

const mapDispatchToProps = {
  handleClick: onButtonCLick,
};

export default connect(mapStateToProps, mapDispatchToProps)(Events);
