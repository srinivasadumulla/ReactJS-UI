import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

const CtrlSnackbar = ({ id, children, props }) => (
    <Snackbar id={id} data-testid={`snackbar${id}`} {...props}>
        {children}
    </Snackbar>
);

CtrlSnackbar.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlSnackbar;
