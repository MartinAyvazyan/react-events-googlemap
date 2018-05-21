import { connect } from 'react-redux';
import search from '../../modules/search/searchThunk';

import Search from './Search';

const mapStateToProps = state => ({
  query: state.query,
});

const mapDispatchToProps = {
  handleChange: search,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
