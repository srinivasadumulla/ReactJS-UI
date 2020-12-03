import React from 'react';
import PropTypes from 'prop-types';
import Popper  from '@material-ui/core/Popper';

const CtrlPopper = ({ id, children, props }) => (
    <Popper id={id} data-testid={`Popper_${id}`} {...props}>
        {children}
    </Popper>
);

CtrlPopper.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlPopper;
