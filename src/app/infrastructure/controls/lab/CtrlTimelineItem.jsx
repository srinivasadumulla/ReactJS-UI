import React from 'react';
import PropTypes from 'prop-types';
import TimelineItem  from '@material-ui/lab/TimelineItem';

const CtrlTimelineItem = ({ id, children, props }) => (
    <TimelineItem id={id} data-testid={`TimelineItem_${id}`} {...props}>
        {children}
    </TimelineItem>
);

CtrlTimelineItem.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTimelineItem;
