import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' ;
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


const ShowScreen = ({navigation}) => {
        const {state} = new useContext(Context);
        const id = navigation.getParam('id');
        const blogPost = state.find((blogPost) => blogPost.id === id);
        
        return (
            <View>
                <Text style={styles.label}>Id: {blogPost.id}</Text>
                <Text style={styles.label}>Title: {blogPost.title}</Text>
                <Text style={styles.label}>Content: {blogPost.content}</Text>

            </View>
        )
    
};
ShowScreen.navigationOptions =({navigation}) =>
{
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate("Edit", {id:  navigation.getParam('id')})}>                           
                <FontAwesomeIcon icon={faPencilAlt}  size={30}/>       
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    label:{
        marginLeft: 5,
        marginBottom: 5
    }
});

export default ShowScreen;

