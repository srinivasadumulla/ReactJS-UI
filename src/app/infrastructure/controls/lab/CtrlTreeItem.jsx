import React from 'react';
import PropTypes from 'prop-types';
import TreeItem  from '@material-ui/lab/TreeItem';

const CtrlTreeItem = ({ id, children, props }) => (
    <TreeItem id={id} data-testid={`TreeItem_${id}`} {...props}>
        {children}
    </TreeItem>
);

CtrlTreeItem.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTreeItem;
