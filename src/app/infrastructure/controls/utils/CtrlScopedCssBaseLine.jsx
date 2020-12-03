import React from 'react';
import PropTypes from 'prop-types';
import ScopedCssBaseline  from '@material-ui/core/ScopedCssBaseline';

const CtrlScopedCssBaseline  = ({ id, children, props }) => (
    <ScopedCssBaseline  id={id} data-testid={`ScopedCssBaseline _${id}`} {...props}>
        {children}
    </ScopedCssBaseline >
);

CtrlScopedCssBaseline .propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlScopedCssBaseline ;
