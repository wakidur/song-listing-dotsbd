import axios from 'axios';
import store from '../store';
// Set config defaults when creating the instance
const AxiosCommonUrl = axios.create({
  baseURL: store.getState().info.baseUrl,
});

export default AxiosCommonUrl;

// import axios from "axios";

// export default axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com'
// });
