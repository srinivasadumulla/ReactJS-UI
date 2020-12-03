import React from 'react';
import PropTypes from 'prop-types';
import Grow  from '@material-ui/core/Grow';

const CtrlGrow = ({ id, children, props }) => (
    <Grow id={id} data-testid={`Grow_${id}`} {...props}>
        {children}
    </Grow>
);

CtrlGrow.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlGrow;
