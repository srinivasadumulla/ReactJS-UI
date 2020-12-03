import React from 'react';
import PropTypes from 'prop-types';
import ToolTip from '@material-ui/core/ToolTip';

const CtrlToolTip = ({ id, children, props }) => (
    <ToolTip id={id} data-testid={`ToolTip_${id}`} {...props}>
        {children}
    </ToolTip>
);

CtrlToolTip.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlToolTip;
