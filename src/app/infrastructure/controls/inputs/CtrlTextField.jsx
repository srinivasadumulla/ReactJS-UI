import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const CtrlTextField = ({ id, props }) => (
    <TextField id={id} data-testid={`textField_${id}`} {...props} />
);

CtrlTextField.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlTextField;
