import React from 'react';
import PropTypes from 'prop-types';
import StepLabel from '@material-ui/core/StepLabel';

const CtrlStepLabel = ({ id, children, props }) => (
    <StepLabel id={id} data-testid={`steplabel${id}`} {...props}>
        {children}
    </StepLabel>
);

CtrlStepLabel.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlStepLabel;
