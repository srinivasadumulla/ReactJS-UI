import React from 'react';
import PropTypes from 'prop-types';
import TimelineConnector  from '@material-ui/lab/TimelineConnector';

const CtrlTimelineConnector = ({ id, props }) => (
    <TimelineConnector id={id} data-testid={`TimelineConnector_${id}`} {...props} />
);

CtrlTimelineConnector.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlTimelineConnector;
