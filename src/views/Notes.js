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
    ScrollView,

    ActivityIndicator
} from 'react-native';
import DeleteButton from "../components/DeleteButton";


export default class Notes extends Component {

    constructor() {
        super();


        this.state = {
            isLoading: true,
            notes: null

        };
    }


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



    deleteNote = (key) => {

        //console.log(this);
        console.log(key);

    };

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            );
        } else {

            let allNotes = this.state.notes.map((val, key) => {

                return <View key={key} style={styles.notescontainer}>
                    <Text style={{marginBottom: 5}}>{val.note_title}</Text>
                    <Text style={{marginBottom: 15}}>{val.note_body}</Text>
                    <DeleteButton deleteNote={() => this.deleteNote({key})}/>
                </View>

            });


            return (
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <ScrollView style={{width: '100%'}}>
                        <Text>Notes</Text>
                        <Button style={styles.button} title={"Next"}
                                onPress={() => this.props.navigation.goBack()}/>
                        {allNotes}
                    </ScrollView>
                </View>
            );
        }
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
    notescontainer: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black'
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



