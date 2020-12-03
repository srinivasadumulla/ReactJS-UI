import React from 'react';
import PropTypes from 'prop-types';
import Badge from '@material-ui/core/Badge';

const CtrlBadge = ({ id, children, props }) => (
    <Badge id={id} data-testid={`Badge_${id}`} {...props}>
        {children}
    </Badge>
);

CtrlBadge.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlBadge;
