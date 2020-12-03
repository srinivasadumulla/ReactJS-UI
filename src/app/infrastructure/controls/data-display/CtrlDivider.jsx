import React from 'react';
import PropTypes from 'prop-types'
import Divider from '@material-ui/core/Divider';

const CtrlDivider = ({ id, props }) => {
    <Divider id={id} data-testid={`Divider_${id}`} {...props} />
}

CtrlDivider.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlDivider;