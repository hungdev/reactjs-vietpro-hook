import axios from 'axios'

const api = axios.create({
  baseURL: 'http://mobileshop.hungvu.net',
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 60000
});

export function getProducts(params) {
  return api.get('/get-products', params)
}