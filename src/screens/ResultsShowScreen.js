import React, {useState,useEffect} from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const [result,setResult] = useState(null);
    const id = navigation.getParam('id')
    //console.log(id)
    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        //response.data;
        setResult(response.data);
    }
    useEffect (() => {
        getResult(id);
    }, []);
    if (!result) return null;
    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList style = {styles.flatList}
                data = {result.photos}
                keyExtractor = {photo => photo}
                renderItem = {({item}) => {
                    return <Image style = {styles.Image} source = {{uri: item}} />
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    Image: {
        height: 200,
        width: 300,
    },
    flatList: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 25,
    }
});

export default ResultsShowScreen;

