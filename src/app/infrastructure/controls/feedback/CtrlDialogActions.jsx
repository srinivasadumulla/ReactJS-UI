import React from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';

const CtrlDialogActions = ({ id, children, props }) => (
    <DialogActions id={id} data-testid={`daialogactions${id}`} {...props}>
        {children}
    </DialogActions>
);

CtrlDialogActions.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlDialogActions;
