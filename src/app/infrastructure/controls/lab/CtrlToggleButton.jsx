import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton  from '@material-ui/lab/ToggleButton';

const CtrlToggleButton = ({ id, children, props }) => (
    <ToggleButton id={id} data-testid={`ToggleButton_${id}`} {...props}>
        {children}
    </ToggleButton>
);

CtrlToggleButton.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlToggleButton;
