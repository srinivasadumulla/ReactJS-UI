import React from 'react';
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress';

const CtrlCircularProgress = ({ id, props }) => {
    <CircularProgress id={id} data-testid={`circularProgress_${id}`} {...props} />
}

CtrlCircularProgress.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlCircularProgress;