import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetails from './ResultsDetails';
import {withNavigation} from 'react-navigation';

const ResultsList = ({title, results, navigation}) => {
    if (!results.length) return null;
    return (
        <View>
            <Text style = {styles.titleStyle} >{title}</Text> 
            <FlatList style = {styles.container}
                horizontal = {true}
                showsHorizontalScrollIndicator = {false}
                data = {results}
                keyExtractor = {result => result.id}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress = {()=> navigation.navigate('ResultsShow',{id: item.id})}>
                        <ResultsDetails result= {item}/>
                        </TouchableOpacity>
                        
                        )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    titleStyle : {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);