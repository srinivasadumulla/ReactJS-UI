import React from 'react';
import PropTypes from 'prop-types';
import Accordion from '@material-ui/core/Accordion';

const CtrlAccordion = ({ id, children, props }) => (
    <Accordion id={id} data-testid={`accordion_${id}`} {...props}>
        {children}
    </Accordion>
);

CtrlAccordion.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlAccordion;
