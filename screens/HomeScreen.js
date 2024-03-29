import { StyleSheet, Text, View, SafeAreaView, Image  } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';

///You can also use navigation props ie: 

{/**
const HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
*/}



const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
        <View style={tw`p-5`}>
             <Image
             source={{uri: "https://links.papareact.com/gzs", }}
             style={styles.logo}
             />
             <NavOptions/>
        </View>
    </SafeAreaView>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    logo:{
        width:100,
        height:100,
        resizeMode:'contain',
    },
})