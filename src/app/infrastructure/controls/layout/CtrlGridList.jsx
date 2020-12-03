import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';

const CtrlGridList = ({ id, children, props }) => (
    <GridList id={id} data-testid={`gridList_${id}`} {...props}>
        {children}
    </GridList>
);

CtrlGridList.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlGridList;
