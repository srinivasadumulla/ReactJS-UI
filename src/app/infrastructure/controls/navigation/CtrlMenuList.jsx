import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';

const CtrlMenuList = ({ id, children, props }) => (
    <MenuList id={id} data-testid={`menulist_${id}`} {...props}>
        {children}
    </MenuList>
);

CtrlMenuList.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlMenuList;
