import React from 'react';
import PropTypes from 'prop-types';
import TimelineSeparator  from '@material-ui/lab/TimelineSeparator';

const CtrlTimelineSeparator = ({ id, children, props }) => (
    <TimelineSeparator id={id} data-testid={`TimelineSeparator_${id}`} {...props}>
        {children}
    </TimelineSeparator>
);

CtrlTimelineSeparator.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTimelineSeparator;
