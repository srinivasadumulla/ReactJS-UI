import React from 'react';
import PropTypes from 'prop-types';
import Pagination  from '@material-ui/lab/Pagination';

const CtrlPagination = ({ id, children, props }) => (
    <Pagination id={id} data-testid={`Pagination_${id}`} {...props}>
        {children}
    </Pagination>
);

CtrlPagination.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlPagination;
