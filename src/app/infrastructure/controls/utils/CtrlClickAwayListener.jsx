import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener  from '@material-ui/core/ClickAwayListener ';

const CtrlClickAwayListener  = ({ id, children, props }) => (
    <ClickAwayListener  id={id} data-testid={`ClickAwayListener _${id}`} {...props}>
        {children}
    </ClickAwayListener >
);

CtrlClickAwayListener .propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlClickAwayListener ;
