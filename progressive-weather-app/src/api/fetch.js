import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9da553dc1200b6185ea97093f760eaad';

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