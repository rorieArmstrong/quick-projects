import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

const fetch = async (querry) => {
    const {res} = await axios.get(URL, {
        params:{
            q: querry,
            units: 'metric',
            APIID: API_KEY
        }
    })
    return res
}

export default fetch;