import axios from 'axios';

const url = "http://localhost:8000/api";
let token = "I5vMWwwUOfwMKb7kci3kOoAGhhotVI3Q5cwWRPb8";

     export const link = axios.create({
        baseURL: url,
        headers: {
          api_token: token,
        },
      });