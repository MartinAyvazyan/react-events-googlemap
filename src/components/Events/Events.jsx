import React from 'react';
import PropTypes from 'prop-types';

const Events = ({ events }) => (
  <ul>
    {events && events.map(event => <li key={event.id}> {event.name.text} </li>)}
  </ul>

);

Events.prototype = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};
export default Events;
// ToDo learn FLOW
