import React from 'react';
import PropTypes from 'prop-types';
import SpeedDialAction  from '@material-ui/lab/SpeedDialAction';

const CtrlSpeedDialAction = ({ id, children, props }) => (
    <SpeedDialAction id={id} data-testid={`SpeedDialAction_${id}`} {...props}>
        {children}
    </SpeedDialAction>
);

CtrlSpeedDialAction.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlSpeedDialAction;
