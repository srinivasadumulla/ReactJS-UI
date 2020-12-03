import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';

const CtrlLink = ({ id, children, props }) => (
    <Link id={id} data-testid={`link_${id}`} {...props}>
        {children}
    </Link>
);

CtrlLink.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlLink;
