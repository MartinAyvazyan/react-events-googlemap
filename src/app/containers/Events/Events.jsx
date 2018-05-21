import React from 'react';
import PropTypes from 'prop-types';
import EventCard from '../../../components/EventCard';

const Events = props => (

  props.events && props.events.map(event =>
    <div key={event.id}> <EventCard {...event} handleClick={props.handleClick} /> </div>)


);

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};
export default Events;
// ToDo learn FLOW
