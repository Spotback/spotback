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
                <View>
                    <Text>Where did you park?</Text>
                </View>
                <View>
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
                        itemHeight={35}
                        highlightColor={"transparent"}
                        activeItemColor={'#F00F'}
                        itemColor={'#F0FF'}
                        highlightWidth={2}
                    // activeItemTextStyle={}
                    />
                </View>
            </View>
            <View style={styles.centerContainer}>
                <View>
                    <Text>When will you get to your car?</Text>
                </View>
                <View>
                    <ScrollPicker
                        dataSource={["Now", "5 min", "10 min", "15 min"]}
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
                        itemHeight={35}
                        highlightColor={"transparent"}
                        activeItemColor={'#FFF'}
                        itemColor={'#FFF'}
                        highlightWidth={2}
                    // activeItemTextStyle={}
                    />
                </View>
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
