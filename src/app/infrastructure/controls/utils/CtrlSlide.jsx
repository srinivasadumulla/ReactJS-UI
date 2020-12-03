import React from 'react';
import PropTypes from 'prop-types';
import Slide  from '@material-ui/core/Slide';

const CtrlSlide = ({ id, children, props }) => (
    <Slide id={id} data-testid={`Slide_${id}`} {...props}>
        {children}
    </Slide>
);

CtrlSlide.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlSlide;
