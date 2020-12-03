import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';

const CtrlAppBar = ({ id, children, props }) => (
    <AppBar id={id} data-testid={`appbar_${id}`} {...props}>
        {children}
    </AppBar>
);

CtrlAppBar.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlAppBar;
