/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator, createAppContainer } from "react-navigation";

import Login from "./src/views/Login";
import Notes from "./src/views/Notes";



const AppNavigator = createStackNavigator(

    {
        Home: Login,
        Notes: Notes
    },
    {
        headerMode: "none"
    },
    {
        initialRouteName: "Home"
    }


);



export default createAppContainer(AppNavigator);

