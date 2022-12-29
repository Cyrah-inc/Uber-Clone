import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';


const MapScreen = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
        <View style={styles.container}>
             <Text style={styles.txt}>MapScreen</Text>
        </View>
    </SafeAreaView>
    
  )
}

export default MapScreen

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
    },
    txt:{
        alignItems: 'center'
    }
})