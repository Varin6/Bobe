/**
 * Delete Button
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button, ActivityIndicator, ScrollView
} from 'react-native';

export default class DeleteButton extends Component {

    constructor() {
        super();

        this.state = {

        };
    }


    componentDidMount(): void {

    }


    render() {

        return (
            <View style={styles.container}>
                <Button title={'Delete'} onPress={this.props.deleteNote}>Delete</Button>
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
    button: {
        marginBottom: 10
    }

});





