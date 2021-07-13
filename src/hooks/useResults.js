import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
    
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
    try {
        const response = await  yelp.get('/search', {
            params: {
                limit: 50, // /search?limit=50
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses)
    }
    catch (err) {
        setErrorMessage('Something went wrong!')
    }
    };
    //searchApi('pasta') => this is wrong way of initialising the search => infinite loop 
    useEffect(() => {
        //function called only 1 time
        searchApi('Steak')
    }, []);

    return [searchApi, results, errorMessage];
};