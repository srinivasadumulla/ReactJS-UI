import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';

const CtrlMenuItem = ({ id, children, props }) => (
    <MenuItem id={id} data-testid={`menuitem_${id}`} {...props}>
        {children}
    </MenuItem>
);

CtrlMenuItem.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlMenuItem;
