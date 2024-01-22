import React from "react";
import {styles} from "./styles";
import {Image, Text, View} from 'react-native';

const Splash = () => {
    return(
        <View>
            <Image 
            resizeMode="contain"
            style={styles.img}
            source={require('../../../assets/images/splash.png')}
            />
        </View>
    );
};
export default Splash;