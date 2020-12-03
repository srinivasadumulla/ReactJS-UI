import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';

const CtrlSelect = ({ id, children, props }) => (
    <Select id={id} data-testid={`select_${id}`} {...props}>
        {children}
    </Select>
);

CtrlSelect.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlSelect;
