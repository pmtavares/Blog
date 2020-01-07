import React, {useContext} from 'react'
import {View, Text, StyleSheet,FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome' ;
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';




const IndexScreen = ({navigation}) => {
        const {state, addBlogPost, deleteBlogPost} = new useContext(Context);

        return (
            <View>

                <FlatList 
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({item})=>{
                        return <TouchableOpacity onPress={() => navigation.navigate("ShowDetail", {id: item.id})}>
                                    <View style={styles.row}>
                                    <Text style={styles.title}>{item.title} - {item.content}</Text>
                                    <TouchableOpacity  onPress={() => deleteBlogPost(item.id)}>
                                       <FontAwesomeIcon icon={faTrash} />
                                       
                                    </TouchableOpacity>
                                    
                                    
                            </View>
                        </TouchableOpacity>

                        
                    }}
                />
            </View>
        )
    
};

IndexScreen.navigationOptions = ({navigation}) =>{
    return {
        headerRight: (
            <TouchableOpacity  onPress={() => navigation.navigate("Create")} >
                <FontAwesomeIcon icon={faPlus} size={20}/>                                       
            </TouchableOpacity>
            )
    };
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

