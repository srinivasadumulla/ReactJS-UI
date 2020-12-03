import React from 'react';
import PropTypes from 'prop-types';
import TreeView  from '@material-ui/lab/TreeView';

const CtrlTreeView = ({ id, children, props }) => (
    <TreeView id={id} data-testid={`TreeView_${id}`} {...props}>
        {children}
    </TreeView>
);

CtrlTreeView.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTreeView;
