import React from 'react';
import PropTypes from 'prop-types'
import ButtonGroup from '@material-ui/core/ButtonGroup';

const CtrlButtonGroup = ({ id, children, props }) => {
    <ButtonGroup id={id} data-testid={`buttonGroup_${id}`} {...props}>{children}</ButtonGroup>
}

CtrlButtonGroup.propTypes = {
    id: PropTypes.string.isRequired,
    childern: PropTypes.any
};

export default CtrlButtonGroup;