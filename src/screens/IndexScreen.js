import React, {useContext} from 'react'
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';

const IndexScreen = () => {
        const {state, addBlogPost} = new useContext(Context);

        return (
            <View>
                <Text>Index screen</Text>  
                <Button title="Add Post" onPress={addBlogPost} />   
                <FlatList 
                    data={state}
                    keyExtractor={(blogPosts) => blogPosts.title}
                    renderItem={({item})=>{
                        return <Text>{item.title}</Text>
                    }}
                />
            </View>
        )
    
};

const styles = StyleSheet.create({

});

export default IndexScreen;

