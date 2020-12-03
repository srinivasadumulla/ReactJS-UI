import React from 'react';
import PropTypes from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress';

const CtrlLinearProgress = ({ id, props }) => {
    <LinearProgress id={id} data-testid={`linearprogress_${id}`} {...props} />
}

CtrlLinearProgress.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlLinearProgress;