import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete  from '@material-ui/lab/Autocomplete';

const CtrlAutocomplete = ({ id, props }) => (
    <Autocomplete id={id} data-testid={`Autocomplete_${id}`} {...props} />
);

CtrlAutocomplete.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlAutocomplete;
