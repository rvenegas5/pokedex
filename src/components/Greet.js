import React from "react";
import { Text } from "react-native";

export default function Greet ({firstname, lastname}) {
    return(
        <Text>Hello {firstname} {lastname}</Text>
    );
}

Greet.defaultProps = {
    firstname: 'Unknow',
    lastname: 'Person'
}
