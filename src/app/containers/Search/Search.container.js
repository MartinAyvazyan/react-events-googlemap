import { connect } from 'react-redux';
import { onQueryChange } from '../../modules/search/searchActions';

import Search from './Search';

const mapDispatchToProps = {
  handleChange: onQueryChange,
};

export default connect(null, mapDispatchToProps)(Search);
