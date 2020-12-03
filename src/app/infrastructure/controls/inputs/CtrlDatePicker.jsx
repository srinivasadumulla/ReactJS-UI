import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const CtrlDatePicker = ({ id, props }) => (
    <MuiPickersUtilsProvider id={id} data-testid={`datePickerUtility_${id}`} utils={DateFnsUtils}>
        <KeyboardDatePicker id={id} data-testid={`datePicker_${id}`} {...props} />
    </MuiPickersUtilsProvider >
);

CtrlDatePicker.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlDatePicker;
