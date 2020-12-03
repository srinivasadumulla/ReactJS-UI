import React from 'react';
import PropTypes from 'prop-types';
import Timeline  from '@material-ui/lab/Timeline';

const CtrlTimeline = ({ id, children, props }) => (
    <Timeline id={id} data-testid={`Timeline_${id}`} {...props}>
        {children}
    </Timeline>
);

CtrlTimeline.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTimeline;
