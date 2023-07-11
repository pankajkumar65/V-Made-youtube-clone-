import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {maxResults:'50'},
    headers: {
      'X-RapidAPI-Key':  '9c827386d7msh239a1da51210460p1f9445jsnf58c82a9ee83',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

  export const fetchFromAPi = async(url)=>{
   const{data}= await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }
  
   