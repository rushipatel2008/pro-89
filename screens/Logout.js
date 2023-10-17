import React from 'react'
import {View,Text,TouchableOpacity,TextImput,StyleSheet} from 'react-native'
import firebase from 'firebase'

export default class Logout extends Component{
 componentDidMount(){
    firebase.auth().signOut()
    this.props.navigation.replace('Login')
 }
 render(){
    return(
        <View>
            <Text>
                Logout
            </Text>
        </View>
    )
 }
} 