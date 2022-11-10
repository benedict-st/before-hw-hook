import React from "react";
import PropTypes from "prop-types";

const UserMeta = (props) => {
    const { name, email } = props;
    return (
        <div>
            <h3>{name}</h3>
            <h3>{email}</h3>
        </div>
    );
};
UserMeta.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

export default UserMeta;
