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
    ScrollView,
    TouchableHighlight,
    TextInput,
    Dimensions,
    ActivityIndicator
} from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};


class HomeScreen extends Component {

    constructor() {
        super();

        this.state = {
            isLoading: true,
            notes: null

        };
    }

    nextButtonPressed = () => {

        console.log('Login: ' + 'Password: ');
        alert('Login: ' + 'Password: ');

    };



    componentDidMount(): void {



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

                        this.setState({
                            isLoading: false,
                            notes: JSON.parse(responseJson._bodyText),
                        })

                        // alert('Title: \n\n' + JSON.parse(responseJson._bodyText)[0].note_title + ' \n\n' + 'Note: \n\n' + JSON.parse(responseJson._bodyText)[0].note_body);
                        // console.log(responseJson);
                        // console.log(JSON.parse(responseJson._bodyText)[0]);

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



    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        } else {

            let allNotes = this.state.notes.map((val, key) => {

                return <View key={key} style={styles.text}>
                    <Text style={{marginBottom: 5}}>{val.note_title}</Text>
                    <Text style={{marginBottom: 15}}>{val.note_body}</Text>
                </View>

            });

            return (
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <ScrollView style={{width: '100%'}}>
                        <Text>Home Screen</Text>
                        <Button style={styles.button} title={"Next"}
                                onPress={() => this.props.navigation.navigate('Login')}/>
                        {allNotes}
                    </ScrollView>
                </View>
            );
        }
    }
}


class App extends Component<props> {

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
                        marginTop :20
                    }}>
                    <Button
                        style={{marginTop: 20}}
                        title="Go back"
                        onPress={() => this.props.navigation.goBack()}
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


const AppNavigator = createStackNavigator(

    {
        Home: HomeScreen,
        Login: App
    },
    {
        headerMode: "none"
    },
    {
        initialRouteName: "Home"
    }


);

export default createAppContainer(AppNavigator);

