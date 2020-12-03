import React from 'react';
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip';

const CtrlChip = ({ id, props }) => {
    <Chip id={id} data-testid={`chip_${id}`} {...props} />
}

CtrlChip.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlChip;