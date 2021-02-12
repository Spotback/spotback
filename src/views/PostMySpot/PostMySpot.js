import React from 'react';
import { View, Text } from 'react-native';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import styles from './PostMySpot.styles';

import pinIcon from '../../images/spotPin2.png';
import EVIcon from '../../images/evCar.png'

const PostMySpot = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    234 San Pedro Sq.
                </Text>
                <Text style={styles.titleText}>
                    Recieve $5
                </Text>
            </View>
            <View style={styles.centerContainer}>
                <ScrollPicker
                    dataSource={["Street", "Parking Lot", "Driveway", "EV Spot"]}
                    selectedIndex={1}
                    renderItem={(data, index) => {
                        //
                    }}
                    onValueChange={(data, selectedIndex) => {
                        //
                    }}
                    wrapperHeight={150}
                    wrapperWidth={150}
                    wrapperBackground={"transparent"}
                    itemHeight={40}
                    highlightColor={"transparent"}
                    highlightBorderWidth={2}
                    activeItemColor={'#F00F'}
                    itemColor={'#F0FF'}
                    // activeItemTextStyle={}
                />
            </View>
            <View style={styles.centerContainer}>

            </View>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Post Spot"
                    size='large'
                />
            </View>
        </View>
    )
}

export default PostMySpot
