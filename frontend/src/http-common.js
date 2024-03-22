import axios from "axios";

const environment = process.env.NODE_ENV;
// for local dev add or change
// 'http://localhost:8081/api'
export default axios.create({
  baseURL: environment === 'development' ? 'https://msmt.phil.tu-dresden.de/api' : 'https://msmt.phil.tu-dresden.de/api',
  //baseURL: environment === 'development' ? 'http://141.76.57.141:8081/api' : 'https://msmt.phil.tu-dresden.de/api',
  headers: {
    "Content-type": "application/json"
  }
});
