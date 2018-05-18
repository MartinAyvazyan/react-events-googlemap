import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class Search extends Component {
  handleChange(query) {
    this.props.handleChange(query);
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

