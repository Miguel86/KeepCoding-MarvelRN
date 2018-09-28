import axios from 'axios'
import * as Settings from '../commons/settings/'

export function configureAxios() {
    axios.defaults.baseURL = 'http://gateway.marvel.com';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Referer'] = 'http://marvel.keepcoding.io';
}

export function fetchComics() {
    const url = '/v1/public/comics?apikey='+Settings.marvelAPIKey
    console.log("URL: ",url)
    return axios.get(url)
}
