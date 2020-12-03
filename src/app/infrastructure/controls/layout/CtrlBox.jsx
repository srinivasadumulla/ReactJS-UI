import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

const CtrlBox = ({ id, children, props }) => (
    <Box id={id} data-testid={`box_${id}`} {...props}>
        {children}
    </Box>
);

CtrlBox.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlBox;
