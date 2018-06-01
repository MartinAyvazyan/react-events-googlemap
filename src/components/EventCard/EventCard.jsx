import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const EventCard = props => (
  <Card>
    <CardHeader title={props.name.html} avatar={props.logo && props.logo.url} />
    <CardActions>
      <FlatButton onClick={() => props.handleClick(props.id)} disabled={props.buttonCLicked}>
        View
      </FlatButton>
    </CardActions>
  </Card>
);

EventCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.shape({
    html: PropTypes.string.isRequired,
  }).isRequired,
  logo: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  buttonCLicked: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
EventCard.defaultProps = {
  logo: null,
};

export default EventCard;
