import React from 'react';
import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';

const CtrlStepper = ({ id, children, props }) => (
    <Stepper id={id} data-testid={`stepper${id}`} {...props}>
        {children}
    </Stepper>
);

CtrlStepper.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlStepper;
