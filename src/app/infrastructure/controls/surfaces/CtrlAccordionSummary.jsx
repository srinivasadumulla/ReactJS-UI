import React from 'react';
import PropTypes from 'prop-types';
import AccordionSummary from '@material-ui/core/AccordionSummary';

const CtrlAccordionSummary = ({ id, children, props }) => (
    <AccordionSummary id={id} data-testid={`accordionsummary_${id}`} {...props}>
        {children}
    </AccordionSummary>
);

CtrlAccordionSummary.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlAccordionSummary;
