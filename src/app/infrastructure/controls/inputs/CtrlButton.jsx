import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';

const CtrlButton = ({ id, children, props }) => {
    <Button id={id} data-testid={`button_${id}`} {...props}>{children}</Button>
}

CtrlButton.propTypes = {
    id: PropTypes.string.isRequired,
    childern: PropTypes.any
};

export default CtrlButton;