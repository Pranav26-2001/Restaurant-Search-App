import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';



const SearchScreen = ({navigation}) => {
    const [term,setTerm] = useState('');
    const [searchApi,results,errorMessage] = useResults();

    const filterResultsbyPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return ( 
        <View style = {{flex:1}}>
            <SearchBar term = {term} onTermChange = {(newTerm) => setTerm(newTerm)}
                onTermSubmit = {() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView >
            <ResultsList title = "Cost Effective" results = {filterResultsbyPrice('$')} />
            <ResultsList title = "Bit Pricer" results = {filterResultsbyPrice('$$')}/>
            <ResultsList title = "Big Spender"results = {filterResultsbyPrice('$$$')}/>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    scrollView: {
        marginBottom: 20
    }
});

export default SearchScreen;