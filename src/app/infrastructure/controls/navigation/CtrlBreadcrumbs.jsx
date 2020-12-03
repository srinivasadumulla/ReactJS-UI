import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const CtrlBreadcrumbs = ({ id, children, props }) => (
    <Breadcrumbs id={id} data-testid={`breadcrumbs_${id}`} {...props}>
        {children}
    </Breadcrumbs>
);

CtrlBreadcrumbs.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlBreadcrumbs;
