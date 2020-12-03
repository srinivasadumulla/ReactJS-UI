import React from 'react';
import PropTypes from 'prop-types';
import TextareaAutosize  from '@material-ui/core/TextareaAutosize';

const CtrlTextareaAutosize = ({ id, props }) => (
    <TextareaAutosize id={id} data-testid={`TextareaAutosize_${id}`} {...props} />
);

CtrlTextareaAutosize.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlTextareaAutosize;
