import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';

const CtrlDialogTitle = ({ id, children, props }) => (
    <DialogTitle id={id} data-testid={`dialogtitle_${id}`} {...props}>
        {children}
    </DialogTitle>
);

CtrlDialogTitle.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlDialogTitle;
