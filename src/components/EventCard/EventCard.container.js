import { connect } from 'react-redux';
import { searchInMap } from '../../modules/map';

import EventCard from './EventCard';

const mapDispatchToProps = {
  handleClick: searchInMap,
};

export default connect(null, mapDispatchToProps)(EventCard);
