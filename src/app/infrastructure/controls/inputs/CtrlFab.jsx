import React from 'react';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';

const CtrlFab = ({ id, children, props }) => (
    <Fab id={id} data-testid={`fabButton_${id}`} {...props}>
        {children}
    </Fab>
);

CtrlFab.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlFab;
