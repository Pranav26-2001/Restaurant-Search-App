import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _WLr4UJOetzVfuatV7p5eheF4CowFLsw5y8rjcRjkUldbgVKubt6c8LWGUwxVXcz8us0mfRMpwBZWYPjxyv3pSWd6kyfcPyOY3tmdkZH3QkEzduwYNEooHQylxadYHYx'
    }
});