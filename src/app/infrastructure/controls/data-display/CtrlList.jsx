import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

const CtrlList = ({ id, children, props }) => (
    <List id={id} data-testid={`List_${id}`} {...props}>
        {children}
    </List>
);

CtrlList.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlList;
