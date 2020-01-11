import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Button} from 'react-native';
import {Context} from '../context/BlogContext';


const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    const {addBlogPostFields} = new useContext(Context);

    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput value = {title} onChangeText={(text) => setTitle(text)} style={styles.input}/>
            <Text style={styles.label}>Enter Content</Text>
            <TextInput value = {content} onChangeText={(text) => setContent(text)} style={styles.input} />
            <Button title="Save Blog Post" 
               onPress={() => onSubmit(title, content)}
            />
        </View>
    )

};

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 10
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 10
    }
});

export default BlogPostForm;