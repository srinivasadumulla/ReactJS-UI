import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';

const CtrlTabs = ({ id, children, props }) => (
    <Tabs id={id} data-testid={`tabs${id}`} {...props}>
        {children}
    </Tabs>
);

CtrlTabs.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTabs;
