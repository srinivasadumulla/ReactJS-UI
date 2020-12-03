import React from 'react';
import PropTypes from 'prop-types';
import AccordionDetails from '@material-ui/core/AccordionDetails';

const CtrlAccordionDetails = ({ id, children, props }) => (
    <AccordionDetails id={id} data-testid={`accordiondetails${id}`} {...props}>
        {children}
    </AccordionDetails>
);

CtrlAccordionDetails.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlAccordionDetails;
