import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

const CtrlListItem = ({ id, children, props }) => (
    <ListItem id={id} data-testid={`ListItem_${id}`} {...props}>
        {children}
    </ListItem>
);

CtrlListItem.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlListItem;
