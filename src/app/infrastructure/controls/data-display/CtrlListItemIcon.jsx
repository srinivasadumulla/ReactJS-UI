import React from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const CtrlListItemIcon = ({ id, children, props }) => (
    <ListItemIcon id={id} data-testid={`ListItemIcon_${id}`} {...props}>
        {children}
    </ListItemIcon>
);

CtrlListItemIcon.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlListItemIcon;
