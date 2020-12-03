import React from 'react';
import PropTypes from 'prop-types';
import CardActionArea from '@material-ui/core/CardActionArea';

const CtrlCardActionArea = ({ id, children, props }) => (
    <CardActionArea id={id} data-testid={`cardActionArea${id}`} {...props}>
        {children}
    </CardActionArea>
);

CtrlCardActionAreas.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlCardActionArea;
