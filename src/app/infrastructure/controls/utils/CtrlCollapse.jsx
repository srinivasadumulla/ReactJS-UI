import React from 'react';
import PropTypes from 'prop-types';
import Collapse  from '@material-ui/core/Collapse';

const CtrlCollapse = ({ id, children, props }) => (
    <Collapse id={id} data-testid={`Collapse_${id}`} {...props}>
        {children}
    </Collapse>
);

CtrlCollapse.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlCollapse;
