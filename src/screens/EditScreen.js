import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const EditScreen = ({navigation}) => {
        const {state, editBlogPost} = new useContext(Context);
        const id = navigation.getParam('id');
        const blogPost = state.find((blogPost) => blogPost.id === id);
        
        return (
            <BlogPostForm initialValues={{title: blogPost.title, content: blogPost.content}} 
                onSubmit={(title,content)=> {
                    editBlogPost(id, title, content, ()=> navigation.pop())
            }}/>
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