import React from 'react';
import PropTypes from 'prop-types';
import StepButton from '@material-ui/core/StepButton';

const CtrlStepButton = ({ id, children, props }) => (
    <StepButton id={id} data-testid={`stepbutton${id}`} {...props}>
        {children}
    </StepButton>
);

CtrlStepButton.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlStepButton;
