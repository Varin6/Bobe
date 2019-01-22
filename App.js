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
    Easing,
    View,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';

import TimerMixin from 'react-timer-mixin';
import Slider from "react-native-slider";

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
            //backgroundColor: new Animated.Value(0),
            // boxSize: new Animated.Value(0),
            // boxSize2: new Animated.Value(0),
            // boxSize3: new Animated.Value(0),
            postcodeTown: '',
            sliderValue: new Animated.Value(0),
            latitude: '',
            longitude: '',
            inputText: ''

        };
    }

    componentDidMount(): void {

        // TimerMixin.setTimeout(
        //     () => {
        //         this.setState({ boxSize: new Animated.Value(0) }, () => {
        //             Animated.timing(this.state.boxSize, {
        //                 toValue: 100,
        //                 duration: 1000,
        //                // easing: Easing.ease
        //             }).start();
        //         });
        //     },
        //     300
        // );
        //
        //
        // TimerMixin.setTimeout(
        //     () => {
        //         this.setState({ boxSize2: new Animated.Value(0) }, () => {
        //             Animated.timing(this.state.boxSize2, {
        //                 toValue: 100,
        //                 duration: 800,
        //                // easing: Easing.ease
        //             }).start();
        //         });
        //     },
        //     500
        // );
        //
        //
        // TimerMixin.setTimeout(
        //     () => {
        //         this.setState({ boxSize3: new Animated.Value(0) }, () => {
        //             Animated.timing(this.state.boxSize3, {
        //                 toValue: 100,
        //                 duration: 600,
        //                 //easing: Easing.ease
        //             }).start();
        //         });
        //     },
        //     700
        // );

    }

    toggleTouch = () => {
        

        fetch('http://api.postcodes.io/postcodes/' +
            this.state.inputText, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status === 200) {
                    this.setState({
                        postcodeTown: responseJson.result.parliamentary_constituency,
                        latitude: responseJson.result.latitude,
                        longitude: responseJson.result.longitude,
                    });
                }
            })
            .catch((error) => {
                console.error(error);
            });

    };





    render() {

        // console.log(this.state);
        return (

            <View style={styles.container}>


                <Animated.View style={[styles.middleBox, {
                    width: this.state.sliderValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 500]
                    }),
                    height: this.state.sliderValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, 500]
                    }),
                    backgroundColor: this.state.sliderValue.interpolate({
                        inputRange: [0, 0.5,  1],
                        outputRange: ['#69140e', '#69140e', '#3c1518']
                    }),
                }]}>

                </Animated.View>

                <Animated.View style={[styles.middleBox2, {
                    width: this.state.sliderValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-100, 450]
                    }),
                    height: this.state.sliderValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-100, 450]
                    }),
                    backgroundColor: this.state.sliderValue.interpolate({
                        inputRange: [0, 0.6,  1],
                        outputRange: ['#a44200', '#a44200', '#3c1518']
                    }),
                }]}>
                </Animated.View>




                <Animated.View style={[styles.middleBox3, {
                    width: this.state.sliderValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [-200, 400]
                    }),
                    height: this.state.sliderValue.interpolate({
                        inputRange: [0,  1],
                        outputRange: [-200, 400]
                    }),
                    backgroundColor: this.state.sliderValue.interpolate({
                        inputRange: [0, 0.7,  1],
                        outputRange: ['#d58936', '#d58936', '#3c1518']
                    }),
                }]}>



                </Animated.View>


                <View style={styles.inner}>
                    <TextInput
                        style={{height: 40, width: 200, borderColor: 'white', borderWidth: 1, color: '#ffffff'}}
                        onChangeText={(text) => this.setState({inputText: text})}
                        value={this.state.inputText}
                    />
                    <TouchableOpacity onPress={this.toggleTouch} >
                        <Text style={[styles.welcome, {marginTop: 20, marginBottom: 20}]}>Check Postcode</Text>
                    </TouchableOpacity>
                    <Text style={styles.instructions}>Postcode: {this.state.inputText}</Text>
                    <Text style={[styles.instructions, {marginTop: 20}]}>Postcode Town: {this.state.postcodeTown}</Text>

                    <Text style={styles.instructions}>Latitude: {this.state.latitude}</Text>
                    <Text style={styles.instructions}>Longitude: {this.state.longitude}</Text>
                    <Text style={[styles.instructions, {marginTop: 20}]}>Slider Value: {this.state.sliderValue._value}</Text>
                    {/*<Text style={styles.instructions}>To get started, edit App.js, my bobe</Text>*/}
                    {/*<Text style={styles.instructions}>{instructions}</Text>*/}
                </View>
                <View style={styles.bottom}>
                    <Slider
                        style={styles.slider}
                        value={this.state.sliderValue._value}
                        onValueChange={value => this.setState({ sliderValue: new Animated.Value(value) })}
                    />
                </View>
            </View>

        );
    }
}




const styles = StyleSheet.create({

    slider: {
        marginLeft:30,
        marginRight: 30,
    },

    middleBox: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        position: 'absolute',
        alignSelf: 'center',
        width: 0,
        height: 0,
        backgroundColor: '#69140e'
    },

    middleBox2: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        position: 'absolute',
        alignSelf: 'center',
        width: 0,
        height: 0,
        backgroundColor: '#a44200'
    },

    middleBox3: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        position: 'absolute',
        alignSelf: 'center',
        width: 0,
        height: 0,
        backgroundColor: '#d58936'
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#3c1518',
        opacity: 1,
    },

    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 1,
    },

    bottom: {
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#a44200',
        height: 70,
        marginTop: 'auto',
    },

    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 20,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 16,
        paddingRight: 16

    },

    instructions: {
        textAlign: 'center',
        color: '#ffffff',
        marginBottom: 5,
    },

});
