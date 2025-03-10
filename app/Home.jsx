import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import ScreenWrapper from '../components/ScreenWrapper'
import {theme} from '../constants/theme'
import {wp, hp} from '../helpers/common'
import {useRouter} from 'expo-router'
// import Secret from './secret.jsx';
// import Video from './video';

const Home = () => {
    const router = useRouter();
    return (
        <ScreenWrapper bg='#fff'>
            
            <View style={{alignItems: 'center'}}>
                <View style={styles.waterLevel}>
                    <Text style={styles.waterLevelText}>1290 L</Text>
                    <Text style={styles.remainingText}>Remaining: 603 L</Text>
                </View>
                {/* <Secret /> */}
                <Button onPress={() => router.push('sections/secret')} title='Click'/>
                {/* <Video /> */}


                <View style={{marginTop: hp(25),flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <View style={{borderWidth: wp(1), width: wp(35), height: hp(15)}}><Text style={{fontSize: hp(10), color: 'black'}}>1</Text></View>
                    <View style={{borderWidth: wp(1), width: wp(35), height: hp(15)}}><Text style={{fontSize: hp(10), color: 'black'}}>2</Text></View>
                    <View style={{borderWidth: wp(1), width: wp(35), height: hp(15)}}><Text style={{fontSize: hp(10), color: 'black'}}>3</Text></View>
                    <View style={{borderWidth: wp(1), width: wp(35), height: hp(15)}}><Text style={{fontSize: hp(10), color: 'black'}}>4</Text></View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({
    waterLevel: {
        marginTop: wp(15),
        alignItems: 'center'
    },
    waterLevelText: {
        color: theme.colors.darkblue,
        fontSize: wp(15)
    },
    remainingText: {
        color: theme.colors.darkblue,
        fontSize: wp(3)
    }
})
