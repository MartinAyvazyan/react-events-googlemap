import React from 'react';
import PropTypes from 'prop-types';
import EventCard from '../EventCard';

const Events = ({ events }) => (

  events && events.map(event => <div key={event.id}> <EventCard {...event} /> </div>)


);

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};
export default Events;
// ToDo learn FLOW
