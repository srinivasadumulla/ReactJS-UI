import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';

const CtrlBackdrop = ({ id, children, props }) => (
    <Backdrop id={id} data-testid={`backdrop_${id}`} {...props}>
        {children}
    </Backdrop>
);

CtrlBackdrop.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlBackdrop;
