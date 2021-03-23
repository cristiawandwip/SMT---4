import axios from 'axios';

const url = "http://localhost:8000/api";
let token = "123456";

     export const link = axios.create({
        baseURL: url,
        headers: {
          api_token: token,
        },
      });