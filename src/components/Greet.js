import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Greet(props) {
    const {firstname, lastname} = props
    return(
        <Text>Hello {firstname} {lastname}</Text>
    );
}

Greet.defaultProps = {
    firstname: 'Unknow',
    lastname: 'Person'
}

Greet.propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired
};
