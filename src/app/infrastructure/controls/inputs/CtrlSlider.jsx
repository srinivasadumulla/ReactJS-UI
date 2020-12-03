import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';

const CtrlSlider = ({ id, props }) => (
    <Slider id={id} data-testid={`slider_${id}`} {...props} />
);

CtrlSlider.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlSlider;
