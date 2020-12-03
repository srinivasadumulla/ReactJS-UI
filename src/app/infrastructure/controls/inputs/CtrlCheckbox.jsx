import React from 'react';
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';

const CtrlCheckbox = ({ id, children, props }) => {
    <Checkbox id={id} data-testid={`checkbox_${id}`} {...props}>{children}</Checkbox>
}

CtrlCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    childern: PropTypes.any
};

export default CtrlCheckbox;