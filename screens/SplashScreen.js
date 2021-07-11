import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'

export default function SplashScreen({navigation}) {
    const styles = StyleSheet.create({
        logo:{
            width: 250,
            height: 250,
        }

    }) 
    return (
        <View>
            <Image style={styles.logo} source={require('../assets/accueil.png')}/>
            <Text>La Bibliothéque du Nain Porte Koi </Text>
            <Button color="blue" title="Commencer" onPress={() => navigation.navigate('Library')} />
        </View>
    )
}
