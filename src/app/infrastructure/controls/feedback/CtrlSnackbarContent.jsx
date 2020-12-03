import React from 'react';
import PropTypes from 'prop-types';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const CtrlSnackbarContent = ({ id, children, props }) => (
    <SnackbarContent id={id} data-testid={`snackbarcontent${id}`} {...props}>
        {children}
    </SnackbarContent>
);

CtrlSnackbarContent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlSnackbarContent;
