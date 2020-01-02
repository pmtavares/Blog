import React, {useContext} from 'react'
import {View, Text, StyleSheet,FlatList, Button} from 'react-native';
import {Context} from '../context/BlogContext';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome'



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
                        return <View style={styles.row}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <FontAwesome icon={SolidIcons.smile} />
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

