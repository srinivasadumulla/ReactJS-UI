import React from 'react';
import PropTypes from 'prop-types';
import CssBaseLine  from '@material-ui/core/CssBaseLine';

const CtrlCssBaseLine  = ({ id, children, props }) => (
    <CssBaseLine  id={id} data-testid={`CssBaseLine _${id}`} {...props}>
        {children}
    </CssBaseLine >
);

CtrlCssBaseLine .propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlCssBaseLine ;
