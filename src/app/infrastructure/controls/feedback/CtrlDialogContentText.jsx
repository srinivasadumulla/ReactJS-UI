import React from 'react';
import PropTypes from 'prop-types';
import DialogContentText from '@material-ui/core/DialogContentText';

const CtrlDialogContentText = ({ id, children, props }) => (
    <DialogContentText id={id} data-testid={`dialogcontenttext_${id}`} {...props}>
        {children}
    </DialogContentText>
);

CtrlDialogContentText.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlDialogContentText;
