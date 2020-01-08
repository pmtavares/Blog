import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Context} from '../context/BlogContext';


const EditScreen = ({navigation}) => {
        const {state} = new useContext(Context);

        const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
        const [title, setTitle] = useState(blogPost.title);
        const [content, setContent] = useState(blogPost.content);
        
        return (
            <View>
                <Text style={styles.label}>Edit Title:</Text>
                <TextInput style={styles.input} value={title} onChangeText={(newTitle) => setTitle(newTitle)} />
                <Text style={styles.label}>Edit Content:</Text>
                <TextInput style={styles.input} value={content} onChangeText={( newContent) => setContent(newContent)} />
            </View>
        )
    
};

const styles = StyleSheet.create({
    label:{
        marginLeft: 5,
        marginBottom: 5
    },
    input:{
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 10
    },
});

export default EditScreen;