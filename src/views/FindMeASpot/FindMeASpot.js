import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import styles from './FindMeASpot.styles';

import pinIcon from '../../images/spotPin2.png';
import EVIcon from '../../images/evCar.png'

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
            <View style={styles.buttonsContainer}>
                <Button
                    title="Find Spot here"
                    size='small'
                    icon={pinIcon}
                />
                <Button
                    title="EV Spot"
                    size='small'
                    icon={EVIcon}
                />
            </View>
            <View style={styles.centerContainer}>
                <View>
                    <Input placeholder="Enter destination" inputStyle="long" />
                </View>
            </View>

        </View>
    )
}

export default FindMeASpot
