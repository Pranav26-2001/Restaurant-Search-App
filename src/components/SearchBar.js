import React from 'react';
import {View, TextInput,Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.backgroundStyle}>
            <Feather name="search" style = {styles.iconStyle} />
            <TextInput style = {styles.inputStyle}
                value = {term}
                placeholder = "Search"
                autoCapitalize = "none"
                autoCorrect = {false}
                onChangeText = {onTermChange}
                onEndEditing = {onTermSubmit}
                
            />
        </View>
    )
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#d3d3d3',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
        
    },
    inputStyle : {
        flex: 1,
        padding: 10,
        fontSize: 18

    },
    iconStyle : {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;