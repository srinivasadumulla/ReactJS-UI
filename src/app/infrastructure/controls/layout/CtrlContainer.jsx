import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const CtrlContainer = ({ id, children, props }) => (
    <Container id={id} data-testid={`container_${id}`} {...props}>
        {children}
    </Container>
);

CtrlContainer.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default CtrlContainer;
