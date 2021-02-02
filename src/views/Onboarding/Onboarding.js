import React from 'react'
import { View, Image } from 'react-native'
import styles from "./Onboarding.styles";
import Button from "../../components/Button/Button";
import Link from "../../components/Link/Link";

const Onboarding = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../images/spotbackLogoFull.png")}/>
            <Button title="Sign Up With Email"/>
            <Link extraText="Already have an account?" linkText="Log in" />
        </View>
    )
}

export default Onboarding

