import React from 'react';
import PropTypes from 'prop-types';
import Popover  from '@material-ui/core/Popover';

const CtrlPopover = ({ id, children, props }) => (
    <Popover id={id} data-testid={`Popover_${id}`} {...props}>
        {children}
    </Popover>
);

CtrlPopover.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlPopover;
