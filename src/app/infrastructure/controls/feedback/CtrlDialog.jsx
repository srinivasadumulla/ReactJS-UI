import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

const CtrlDialog = ({ id, children, props }) => (
    <Dialog id={id} data-testid={`dialog_${id}`} {...props}>
        {children}
    </Dialog>
);

CtrlDialog.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlDialog;
