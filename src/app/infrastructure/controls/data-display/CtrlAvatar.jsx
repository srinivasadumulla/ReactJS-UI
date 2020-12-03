import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

const CtrlAvatar= ({ id, props }) => (
    <Avatar id={id} data-testid={`avatar_${id}`} {...props} />
);

CtrlAvatar.propTypes = {
    id: PropTypes.string.isRequired
};

export default CtrlAvatar;
