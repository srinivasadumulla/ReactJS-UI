import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';

const CtrlMenu = ({ id, children, props }) => (
    <Menu id={id} data-testid={`menu_${id}`} {...props}>
        {children}
    </Menu>
);

CtrlMenu.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlMenu;
