import React from 'react';
import PropTypes from 'prop-types';
import Fade  from '@material-ui/core/Fade';

const CtrlFade = ({ id, children, props }) => (
    <Fade id={id} data-testid={`Fade_${id}`} {...props}>
        {children}
    </Fade>
);

CtrlFade.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlFade;
