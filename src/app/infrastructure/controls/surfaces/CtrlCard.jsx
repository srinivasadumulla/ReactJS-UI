import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';

const CtrlCard = ({ id, children, props }) => (
    <Card id={id} data-testid={`card_${id}`} {...props}>
        {children}
    </Card>
);

CtrlCard.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlCard;
