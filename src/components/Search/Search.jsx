import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import debounce from 'lodash-es/debounce';


class Search extends Component {
  search = debounce(this.props.handleChange, 400);
  handleChange(query) {
    this.search(query);
    console.log(123);
  }
  render() {
    return (
      <div className="search">
        <TextField
          name="query"
          hintText="Enter event name"
          floatingLabelText="Event Name"
          onChange={event => this.handleChange(event.target.value)}
        />
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Search;

