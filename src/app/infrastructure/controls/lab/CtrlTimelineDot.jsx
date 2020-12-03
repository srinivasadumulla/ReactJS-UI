import React from 'react';
import PropTypes from 'prop-types';
import TimelineDot  from '@material-ui/lab/TimelineDot';

const CtrlTimelineDot = ({ id, props }) => (
    <TimelineDot id={id} data-testid={`TimelineDot_${id}`} {...props} />
);

CtrlTimelineDot.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlTimelineDot;
