import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';

const CtrlDrawer = ({ id, children, props }) => (
    <Drawer id={id} data-testid={`drawer_${id}`} {...props}>
        {children}
    </Drawer>
);

CtrlDrawer.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlDrawer;
