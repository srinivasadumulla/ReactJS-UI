import React from 'react';
import PropTypes from 'prop-types';
import ToggleButtonGroup  from '@material-ui/lab/ToggleButtonGroupGroup';

const CtrlToggleButtonGroup = ({ id, children, props }) => (
    <ToggleButtonGroup id={id} data-testid={`ToggleButtonGroup_${id}`} {...props}>
        {children}
    </ToggleButtonGroup>
);

CtrlToggleButtonGroup.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlToggleButtonGroup;
