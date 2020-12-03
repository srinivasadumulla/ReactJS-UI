import React from 'react';
import PropTypes from 'prop-types';
import Skeleton  from '@material-ui/lab/Skeleton';

const CtrlSkeleton = ({ id, props }) => (
    <Skeleton id={id} data-testid={`Skeleton_${id}`} {...props} />
);

CtrlSkeleton.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlSkeleton;
