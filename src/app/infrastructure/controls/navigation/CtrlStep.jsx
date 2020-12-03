import React from 'react';
import PropTypes from 'prop-types';
import Step from '@material-ui/core/Step';

const CtrlStep = ({ id, children, props }) => (
    <Step id={id} data-testid={`step${id}`} {...props}>
        {children}
    </Step>
);

CtrlStep.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlStep;
