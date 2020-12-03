import React from 'react';
import PropTypes from 'prop-types';
import TabPanel from '@material-ui/core/TabPanel';

const CtrlTabPanel = ({ id, children, props }) => (
    <TabPanel id={id} data-testid={`tabpanel${id}`} {...props}>
        {children}
    </TabPanel>
);

CtrlTabPanel.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlTabPanel;
