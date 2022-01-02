import React from "react";
import {TextInput, Button, Text, View} from "react-native";

export default function LoginForm() {
    return (
        <View>
            <Text>Login</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button title="Submit" onPress={()=>console.log("Enviado!")} />
        </View>
    );
}
