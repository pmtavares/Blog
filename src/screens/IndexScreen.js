import React, {useContext} from 'react'
import {View, Text, StyleSheet,FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' ;
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const IndexScreen = () => {
        const {state, addBlogPost, deleteBlogPost} = new useContext(Context);

        return (
            <View>
                <Button title="Add Post" onPress={addBlogPost} />   
                <FlatList 
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({item})=>{
                        return <View style={styles.row}>
                                    <Text style={styles.title}>{item.title} - {item.id}</Text>
                                    <TouchableOpacity  onPress={() => deleteBlogPost(item.id)}>
                                       <FontAwesomeIcon icon={faTrash} />
                                       
                                    </TouchableOpacity>
                                    
                                    
                            </View>
                    }}
                />
            </View>
        )
    
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18 
    },
    icon:{
        fontSize: 18
    }
});

export default IndexScreen;

