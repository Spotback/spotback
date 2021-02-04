import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Input from '../../components/Input/Input';

import styles from './FindMeASpot.styles';

const FindMeASpot = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Find Me A Spot
                </Text>
                <Text style={styles.titleText}>
                    Pay $6
                </Text>
            </View>
            <View style={styles.centerContainer}>
                <View>
                    <Text style={styles.text}>
                        Where are you going?
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => console.log('press') }>
                        <View style={styles.button}>
                            <Text style={styles.buttonTitle}>Find Spot Here</Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                    <Input placeholder="Enter destination" inputStyle="long" />
                    </View>
                </View>
            </View>

        </View>
    )
}

export default FindMeASpot
