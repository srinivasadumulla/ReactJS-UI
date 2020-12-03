import React from 'react';
import PropTypes from 'prop-types';
import AlertTitle  from '@material-ui/lab/AlertTitle';

const CtrlAlertTitle = ({ id, children, props }) => (
    <AlertTitle id={id} data-testid={`AlertTitle_${id}`} {...props}>
        {children}
    </AlertTitle>
);

CtrlAlertTitle.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlAlertTitle;
