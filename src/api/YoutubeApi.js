import axios from "axios";

const KEY ="AIzaSyDVKy6zKgmIVtvwYC0pUb9uLo9dGv8JRkE";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/search',
    headers:{
        part: 'snippets',
        maxResults:5,
        key:KEY
    }
})