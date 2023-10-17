import React from 'react'
import {View,Text,TouchableOpacity,TextImput,StyleSheet} from 'react-native'
import firebase from 'firebase'

export default class Login extends React.Component{
    constructor(){
        super()
        this.state={
            email:'',password:''
        }
    }
    render(){
        return(
            <View>
            <TextImput
            placeHolder={'exnter email'}
            placeHolderTextColor={'red'}
            style={styles.imputbox}
            onChangeText={text=>this.setState({email:text})}
            />
            <TextImput
            placeHolder={'exnter password'}
            placeHolderTextColor={'red'}
            style={styles.imputbox}
            onChangeText={text=>this.setState({password:text})}
            />
            <TouchableOpacity>
                <Text>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Register
                </Text>
            </TouchableOpacity>
            </View>

        )
        
    }
}
