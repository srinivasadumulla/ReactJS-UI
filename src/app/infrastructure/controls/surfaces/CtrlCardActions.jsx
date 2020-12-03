import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';

const CtrlCardActions = ({ id, children, props }) => (
    <CardActions id={id} data-testid={`cardActions_${id}`} {...props}>
        {children}
    </CardActions>
);

CtrlCardActions.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlCardActions;
