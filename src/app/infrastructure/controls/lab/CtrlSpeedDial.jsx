import React from 'react';
import PropTypes from 'prop-types';
import SpeedDial  from '@material-ui/lab/SpeedDial';

const CtrlSpeedDial = ({ id, children, props }) => (
    <SpeedDial id={id} data-testid={`SpeedDial_${id}`} {...props}>
        {children}
    </SpeedDial>
);

CtrlSpeedDial.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlSpeedDial;
