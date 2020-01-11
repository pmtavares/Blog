import React, {useContext} from 'react'
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';


const CreateScreen = ({navigation}) => {
        const {addBlogPostFields} = new useContext(Context);

        return (
            <BlogPostForm onSubmit={(title, content)=> {
                addBlogPostFields(title, content, () => navigation.navigate('Index'))
            }} 
            
            />
        )
    
};

BlogPostForm.defaultProps ={
    initialValues :{
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({

});

export default CreateScreen;

