import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import ScreenWrapper from '../components/ScreenWrapper'
import { theme } from '../constants/theme'
import { wp, hp } from '../helpers/common'
import { useRouter } from 'expo-router'

const Home = () => {
    const router = useRouter();
    return (
        <ScreenWrapper bg='#fff'>
            <View style={styles.container}>
                <View style={styles.waterLevel}>
                    <Text style={styles.waterLevelText}>1290 L</Text>
                    <Text style={styles.remainingText}>Remaining: 603 L</Text>
                </View>
                <Button onPress={() => router.push('sections/secret')} title='Click' />

                <View style={styles.waterItemsContainer}>
                    <View style={styles.waterItem}><Text style={styles.waterItemText}>1</Text></View>
                    <View style={styles.waterItem}><Text style={styles.waterItemText}>2</Text></View>
                    <View style={styles.waterItem}><Text style={styles.waterItemText}>3</Text></View>
                    <View style={styles.waterItem}><Text style={styles.waterItemText}>4</Text></View>
                </View>
            </View>
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    waterLevel: {
        marginTop: wp(15),
        alignItems: 'center',
    },
    waterLevelText: {
        color: theme.colors.darkblue,
        fontSize: wp(15),
    },
    remainingText: {
        color: theme.colors.darkblue,
        fontSize: wp(3),
    },
    waterItemsContainer: {
        marginTop: hp(25),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: wp(8),
    },
    waterItem: {
        alignItems: 'center',
        borderRadius: wp(3),
        backgroundColor: theme.colors.paleorange,
        width: wp(35),
        height: hp(15),
        justifyContent: 'center',
    },
    waterItemText: {
        fontSize: hp(10),
        color: 'black',
    },
});
