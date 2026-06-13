import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONT_FAMILIES, FONT_SIZES } from '../constants/theme';

export default function Header({ navigation, route, options, layout }) {
    return (
        <SafeAreaView style={{ backgroundColor: COLORS.white }} edges={['top']}>
            <View style={styles.headerContainer}>
                <View style={styles.left}>
                    <Ionicons name="menu" size={32} color={COLORS.black} />
                </View>
                <View style={styles.center}>
                    <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                </View>
                <View style={styles.right}>
                    <Ionicons name="notifications-outline" size={28} color={COLORS.black} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: COLORS.white,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    logo: {
        width: 120,
        height: 40,
        resizeMode: 'contain',
    },
    left: {
        flex: 1,
        alignItems: 'flex-start',
    },
    center: {
        flex: 2,
        alignItems: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
    }
});
