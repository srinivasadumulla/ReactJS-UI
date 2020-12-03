import React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from '@material-ui/core/RadioGroup';

const CtrlRadioGroup = ({ id, children, props }) => (
    <RadioGroup id={id} data-testid={`radioButton_${id}`} {...props}>
        {children}
    </RadioGroup>
);

CtrlRadioGroup.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlRadioGroup;
