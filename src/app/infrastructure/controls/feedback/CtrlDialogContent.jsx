import React from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';

const CtrlDialogContent = ({ id, children, props }) => (
    <DialogContent id={id} data-testid={`dialogcontent_${id}`} {...props}>
        {children}
    </DialogContent>
);

CtrlDialogContent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlDialogContent;
