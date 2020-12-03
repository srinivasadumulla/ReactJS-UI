import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem  from '@material-ui/lab/PaginationItem';

const CtrlPaginationItem = ({ id, children, props }) => (
    <PaginationItem id={id} data-testid={`PaginationItem_${id}`} {...props}>
        {children}
    </PaginationItem>
);

CtrlPaginationItem.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlPaginationItem;
