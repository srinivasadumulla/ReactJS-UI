import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const CtrlTypography = ({ id, children, props }) => (
    <Typography id={id} data-testid={`Typography_${id}`} {...props}>
        {children}
    </Typography>
);

CtrlTypography.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTypography;
