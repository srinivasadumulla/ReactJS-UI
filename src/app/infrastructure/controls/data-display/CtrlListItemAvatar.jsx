import React from 'react';
import PropTypes from 'prop-types';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const CtrlListItemAvatar = ({ id, children, props }) => (
    <ListItemAvatar id={id} data-testid={`ListItemAvatar_${id}`} {...props}>
        {children}
    </ListItemAvatar>
);

CtrlListItemAvatar.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlListItemAvatar;
