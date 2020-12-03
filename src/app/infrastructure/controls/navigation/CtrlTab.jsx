import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';

const CtrlTab = ({ id, children, props }) => (
    <Tab id={id} data-testid={`tab${id}`} {...props}>
        {children}
    </Tab>
);

CtrlTab.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTab;
