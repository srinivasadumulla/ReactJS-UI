import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';

const CtrlHidden = ({ id, children, props }) => (
    <Hidden id={id} data-testid={`hidden_${id}`} {...props}>
        {children}
    </Hidden>
);

CtrlHidden.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlHidden;
