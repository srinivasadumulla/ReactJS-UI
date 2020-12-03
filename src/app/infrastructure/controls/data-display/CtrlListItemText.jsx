import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';

const CtrlListItemText = ({ id, props }) => (
    <ListItemText id={id} data-testid={`ListItemText_${id}`} {...props} />
);

CtrlListItemText.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlListItemText;
