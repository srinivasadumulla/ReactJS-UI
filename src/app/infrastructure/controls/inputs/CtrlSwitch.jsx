import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';

const CtrlSwitch = ({ id, props }) => (
    <Switch id={id} data-testid={`switch_${id}`} {...props} />
);

CtrlSwitch.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlSwitch;
