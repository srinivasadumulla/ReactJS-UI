import React from 'react';
import PropTypes from 'prop-types';
import NoSsr  from '@material-ui/core/NoSsr';

const CtrlNoSsr = ({ id, children, props }) => (
    <NoSsr id={id} data-testid={`NoSsr_${id}`} {...props}>
        {children}
    </NoSsr>
);

CtrlNoSsr.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlNoSsr;
