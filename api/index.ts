import axios from "axios";

const getTrending = async() => {
  const options = {
    method: 'GET',
    url: 'https://app-store2.p.rapidapi.com/ios/new/paid',
    params: {
      country: 'us',
      lang: 'en',
      category: '6016',
      num: '100'
    },
    headers: {
      'X-RapidAPI-Key': '0796435f10mshc44235ebe773269p11a2f4jsnab96a54bf530',
      'X-RapidAPI-Host': 'app-store2.p.rapidapi.com'
    }
  };
    const response = await axios.request(options);
    return response.data    
}

export {
    getTrending,
}