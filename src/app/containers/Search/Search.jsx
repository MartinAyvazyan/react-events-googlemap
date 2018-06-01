import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    query: '',
  };
  handleChange1(query) {
    this.setState(
      {
        query: query === ' ' ? query.trim() : query,
      },
      () => this.props.handleChange(this.state.query),
    );
  }
  render() {
    return (
      <div className="search">
        <TextField
          name="query"
          hintText="Enter event name"
          floatingLabelText="Event Name"
          value={this.state.query}
          onChange={event => this.handleChange1(event.target.value)}
        />
      </div>
    );
  }
}

Search.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Search;
