import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

const CtrlGrid = ({ id, children, props }) => (
    <Grid id={id} data-testid={`grid_${id}`} {...props}>
        {children}
    </Grid>
);

CtrlGrid.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlGrid;
