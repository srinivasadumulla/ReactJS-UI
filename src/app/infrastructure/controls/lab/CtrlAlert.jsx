import React from 'react';
import PropTypes from 'prop-types';
import Alert  from '@material-ui/lab/Alert';

const CtrlAlert = ({ id, children, props }) => (
    <Alert id={id} data-testid={`Alert_${id}`} {...props}>
        {children}
    </Alert>
);

CtrlAlert.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlAlert;
