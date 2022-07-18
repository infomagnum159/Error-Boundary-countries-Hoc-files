import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://burger-group-js14-default-rtdb.europe-west1.firebasedatabase.app',
});

// axiosApi.interceptors.request.use( req => {
//   console.log('In request interceptors', req);
//   return req;
// });
// axiosApi.interceptors.response.use( res => {
//   console.log('In response interceptors', res);
//   return res;
// }, err => {
//   console.log("Error");
//   throw err;
// });

export default axiosApi;