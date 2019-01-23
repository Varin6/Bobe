/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Animated,
    Button,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';




const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<props> {

    constructor() {
        super();

        this.state = {
            login: '',
            password: ''


        };
    }

    componentDidMount(): void {

    }

    // toggleTouch = () => {
    //
    //
    //     fetch('http://api.postcodes.io/postcodes/' +
    //         this.state.inputText, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             if (responseJson.status === 200) {
    //                 this.setState({
    //                     postcodeTown: responseJson.result.parliamentary_constituency,
    //                     latitude: responseJson.result.latitude,
    //                     longitude: responseJson.result.longitude,
    //                 });
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    //
    // };

    buttonPressed = () => {

        console.log('Login: ' + this.state.login + 'Password: ' + this.state.password);
        alert('Login: ' + this.state.login + 'Password: ' + this.state.password);

    };





    render() {

        // console.log(this.state);
        return (

            <View style={styles.container}>

                <Text style={styles.text}>Login</Text>
                <TextInput
                    style={styles.textinput}
                    defaultValue={this.state.login}
                    onChangeText={(login) => this.setState({login: login})}
                />

                <Text style={styles.text}>Password</Text>
                <TextInput
                    style={[styles.textinput, {marginBottom: 45}]}
                    defaultValue={this.state.password}
                    onChangeText={(password) => this.setState({password: password})}
                    secureTextEntry={true}
                />

                <Button style={styles.button} title={"Login"} onPress={this.buttonPressed}/>



            </View>

        );
    }
}




const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#eeeeee',
        opacity: 1,
        paddingLeft:  20,
        paddingRight: 20

    },
    textinput: {
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    button: {

    },
    text: {
        fontSize: 12,
    }


});
