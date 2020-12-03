import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';

const CtrlCardContent = ({ id, children, props }) => (
    <CardContent id={id} data-testid={`cardcontent_${id}`} {...props}>
        {children}
    </CardContent>
);

CtrlCardContent.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlCardContent;
