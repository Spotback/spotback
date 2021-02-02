import React from 'react'
import { View, Text, Image } from 'react-native'
import Button from "../../components/Button/Button";

const Onboarding = () => {
    return (
        <View>
            <Image source={require("../../images/spotbackLogoFull.png")}/>
            <Button title="Sign Up With Email"/>
        </View>
    )
}

export default Onboarding

