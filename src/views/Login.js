/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Button,
    View,
    TouchableHighlight,
    TextInput,
} from 'react-native';


export default class Login extends Component {

    constructor() {
        super();

        this.state = {
            login: '',
            password: ''


        };
    }

    componentDidMount(): void {

    }


    buttonPressed = () => {

        console.log('Login: ' + this.state.login + 'Password: ' + this.state.password);
        alert('Login: ' + this.state.login + 'Password: ' + this.state.password);

    };



    notesButtonPressed = () => {

        fetch('http://77.68.13.121:4000/api/notes', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        //.then((response) => response.json())
            .then((responseJson) => {


                if (responseJson.status === 200) {

                    alert('Title: \n\n' + JSON.parse(responseJson._bodyText)[0].note_title + ' \n\n' + 'Note: \n\n' + JSON.parse(responseJson._bodyText)[0].note_body);
                    console.log(responseJson);
                    console.log(JSON.parse(responseJson._bodyText)[0]);

                    // this.setState({
                    //     postcodeTown: responseJson.result.parliamentary_constituency,
                    //     latitude: responseJson.result.latitude,
                    //     longitude: responseJson.result.longitude,
                    // });
                }
            })
            .catch((error) => {
                //console.error(error);
                alert(error);
            });

    };




    render() {

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


                <TouchableHighlight
                    style ={{
                        height: 40,
                        borderRadius:10,
                        marginTop :20
                    }}>
                <Button style={styles.button} title={"Login"} onPress={this.buttonPressed}/>
                </TouchableHighlight>

                <TouchableHighlight
                    style ={{
                        height: 40,
                        borderRadius:10,
                        marginTop :20
                    }}>
                <Button style={styles.button} title={"Notes"} onPress={this.notesButtonPressed}/>
                </TouchableHighlight>



                <TouchableHighlight
                    style ={{
                        height: 40,
                        width:160,
                        borderRadius:10,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop :20,
                    }}>
                    <Button
                        style={{marginTop: 20}}
                        title="Next"
                        onPress={() => this.props.navigation.navigate('Notes')}
                    />
                </TouchableHighlight>

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
        marginBottom: 10
    },
    text: {
        fontSize: 12,
    }


});

