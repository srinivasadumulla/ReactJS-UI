import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const CtrlPaper = ({ id, props }) => (
    <Paper id={id} data-testid={`paper_${id}`} {...props} />
);

CtrlPaper.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlPaper;
