import React from 'react';
import PropTypes from 'prop-types';
import Rating  from '@material-ui/lab/Rating';

const CtrlRating = ({ id, props }) => (
    <Rating id={id} data-testid={`Rating_${id}`} {...props} />
);

CtrlRating.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlRating;
