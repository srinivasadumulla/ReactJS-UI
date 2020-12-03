import React from 'react';
import PropTypes from 'prop-types';
import Portal  from '@material-ui/core/Portal';

const CtrlPortal = ({ id, children, props }) => (
    <Portal id={id} data-testid={`Portal_${id}`} {...props}>
        {children}
    </Portal>
);

CtrlPortal.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlPortal;
