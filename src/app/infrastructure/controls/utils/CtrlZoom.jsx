import React from 'react';
import PropTypes from 'prop-types';
import Zoom  from '@material-ui/core/Zoom';

const CtrlZoom = ({ id, children, props }) => (
    <Zoom id={id} data-testid={`Zoom_${id}`} {...props}>
        {children}
    </Zoom>
);

CtrlZoom.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlZoom;
