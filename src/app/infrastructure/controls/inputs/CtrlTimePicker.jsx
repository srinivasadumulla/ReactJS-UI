import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';

const CtrlTimePicker = ({ id, props }) => (
    <MuiPickersUtilsProvider id={id} data-testid={`timePickerUtility_${id}`} utils={DateFnsUtils}>
        <KeyboardTimePicker id={id} data-testid={`timePicker_${id}`} {...props} />
    </MuiPickersUtilsProvider >
);

CtrlTimePicker.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlTimePicker;
