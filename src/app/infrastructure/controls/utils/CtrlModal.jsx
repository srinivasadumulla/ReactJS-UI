import React from 'react';
import PropTypes from 'prop-types';
import Modal  from '@material-ui/core/Modal';

const CtrlModal  = ({ id, children, props }) => (
    <Modal  id={id} data-testid={`Modal _${id}`} {...props}>
        {children}
    </Modal >
);

CtrlModal .propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlModal ;
